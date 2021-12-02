open Js.Array2;
open Margin;

open MarginBlockEnd;
type marginBlockEnd = { style: Margin.variant }
@module("./BlockEnd/MarginBlockEndStyle.css.js") external marginBlockEnd: marginBlockEnd = "MarginBlockEndStyle"

open MarginBlockStart;
type marginBlockStart = { style: Margin.variant }
@module("./BlockStart/MarginBlockStartStyle.css.js") external marginBlockStart: marginBlockStart = "MarginBlockStartStyle"

open MarginInlineEnd;
type marginInlineEnd = { style: Margin.variant }
@module("./InlineEnd/MarginInlineEndStyle.css.js") external marginInlineEnd: marginInlineEnd = "MarginInlineEndStyle"

open MarginInlineStart;
type marginInlineStart = { style: Margin.variant }
@module("./InlineStart/MarginInlineStartStyle.css.js") external marginInlineStart: marginInlineStart = "MarginInlineStartStyle"

module MarginLayer = {
  @genType
  type i = {
    "marginBlockEnd": MarginBlockEnd.t,
    "marginBlockStart": MarginBlockStart.t,
    "marginInlineEnd": MarginInlineEnd.t,
    "marginInlineStart": MarginInlineStart.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["marginBlockEnd"]) {
    | #none     => marginBlockEnd.style["none"]
    | #xxxsmall => marginBlockEnd.style["xxxsmall"]
    | #xxsmall  => marginBlockEnd.style["xxsmall"]
    | #xsmall   => marginBlockEnd.style["xsmall"]
    | #small    => marginBlockEnd.style["small"]
    | #medium   => marginBlockEnd.style["medium"]
    | #large    => marginBlockEnd.style["large"]
    | #xlarge   => marginBlockEnd.style["xlarge"]
    | #xxlarge  => marginBlockEnd.style["xxlarge"]
    | #xxxlarge => marginBlockEnd.style["xxxlarge"]
    },

    switch (i["marginBlockStart"]) {
    | #none     => marginBlockStart.style["none"]
    | #xxxsmall => marginBlockStart.style["xxxsmall"]
    | #xxsmall  => marginBlockStart.style["xxsmall"]
    | #xsmall   => marginBlockStart.style["xsmall"]
    | #small    => marginBlockStart.style["small"]
    | #medium   => marginBlockStart.style["medium"]
    | #large    => marginBlockStart.style["large"]
    | #xlarge   => marginBlockStart.style["xlarge"]
    | #xxlarge  => marginBlockStart.style["xxlarge"]
    | #xxxlarge => marginBlockStart.style["xxxlarge"]
    },

    switch (i["marginInlineEnd"]) {
    | #none     => marginInlineEnd.style["none"]
    | #xxxsmall => marginInlineEnd.style["xxxsmall"]
    | #xxsmall  => marginInlineEnd.style["xxsmall"]
    | #xsmall   => marginInlineEnd.style["xsmall"]
    | #small    => marginInlineEnd.style["small"]
    | #medium   => marginInlineEnd.style["medium"]
    | #large    => marginInlineEnd.style["large"]
    | #xlarge   => marginInlineEnd.style["xlarge"]
    | #xxlarge  => marginInlineEnd.style["xxlarge"]
    | #xxxlarge => marginInlineEnd.style["xxxlarge"]
    },

    switch (i["marginInlineStart"]) {
    | #none     => marginInlineStart.style["none"]
    | #xxxsmall => marginInlineStart.style["xxxsmall"]
    | #xxsmall  => marginInlineStart.style["xxsmall"]
    | #xsmall   => marginInlineStart.style["xsmall"]
    | #small    => marginInlineStart.style["small"]
    | #medium   => marginInlineStart.style["medium"]
    | #large    => marginInlineStart.style["large"]
    | #xlarge   => marginInlineStart.style["xlarge"]
    | #xxlarge  => marginInlineStart.style["xxlarge"]
    | #xxxlarge => marginInlineStart.style["xxxlarge"]
    },
  ] -> joinWith(" ");
}
