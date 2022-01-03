open Js.Array2;

open Hyphens;
type hyphens = { style: Hyphens.variant }
@module("./Hyphens/HyphensStyle.css.js") external hyphens: hyphens = "HyphensStyle"

open OverflowWrap;
type overflowWrap = { style: OverflowWrap.variant }
@module("./OverflowWrap/OverflowWrapStyle.css.js") external overflowWrap: overflowWrap = "OverflowWrapStyle"

open TextOverflow;
type textOverflow = { style: TextOverflow.variant }
@module("./TextOverflow/TextOverflowStyle.css.js") external textOverflow: textOverflow = "TextOverflowStyle"

open WordBreak;
type wordBreak = { style: WordBreak.variant }
@module("./WordBreak/WordBreakStyle.css.js") external wordBreak: wordBreak = "WordBreakStyle"

module TextOverflowLayer = {
  @genType
  type i = {
    "hyphens": Hyphens.t,
    "overflowWrap": OverflowWrap.t,
    "textOverflow": TextOverflow.t,
    "wordBreak": WordBreak.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["hyphens"]) {
    | #none    => hyphens.style["none"]
    | #manual  => hyphens.style["manual"]
    | #auto    => hyphens.style["auto"]
    | #inherit => hyphens.style["inherit"]
    | #initial => hyphens.style["initial"]
    | #revert  => hyphens.style["revert"]
    | #unset   => hyphens.style["unset"]
    },

    switch (i["overflowWrap"]) {
    | #normal     => overflowWrap.style["normal"]
    | #breakWord  => overflowWrap.style["breakWord"]
    | #anywhere   => overflowWrap.style["anywhere"]
    | #inherit    => overflowWrap.style["inherit"]
    | #initial    => overflowWrap.style["initial"]
    | #revert     => overflowWrap.style["revert"]
    | #unset      => overflowWrap.style["unset"]
    },

    switch (i["textOverflow"]) {
    | #clip     => textOverflow.style["clip"]
    | #ellipsis => textOverflow.style["ellipsis"]
    | #inherit  => textOverflow.style["inherit"]
    | #initial  => textOverflow.style["initial"]
    | #revert   => textOverflow.style["revert"]
    | #unset    => textOverflow.style["unset"]
    },

    switch (i["wordBreak"]) {
    | #normal   => wordBreak.style["normal"]
    | #breakAll => wordBreak.style["breakAll"]
    | #keepAll  => wordBreak.style["keepAll"]
    | #breakWord  => wordBreak.style["breakWord"]
    | #inherit  => wordBreak.style["inherit"]
    | #initial  => wordBreak.style["initial"]
    | #revert   => wordBreak.style["revert"]
    | #unset    => wordBreak.style["unset"]
    },
  ] -> joinWith(" ");
}
