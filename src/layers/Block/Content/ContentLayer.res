open Js.Array2;

open ContentAlign;
type contentAlign = { style: ContentAlign.variant }
@module("./Align/ContentAlignStyle.css.js") external contentAlign: contentAlign = "ContentAlignStyle"

module ContentLayer = {
  @genType
  type i = {
    "contentAlign": ContentAlign.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["contentAlign"]) {
    | #left        => contentAlign.style["left"]
    | #right       => contentAlign.style["right"]
    | #center      => contentAlign.style["center"]
    | #justify     => contentAlign.style["justify"]
    | #justifyAll  => contentAlign.style["justifyAll"]
    | #start       => contentAlign.style["start"]
    | #end         => contentAlign.style["end"]
    | #matchParent => contentAlign.style["matchParent"]
    | #dot         => contentAlign.style["dot"]
    | #dotCenter   => contentAlign.style["dotCenter"]
    | #inherit     => contentAlign.style["inherit"]
    | #initial     => contentAlign.style["initial"]
    | #unset       => contentAlign.style["unset"]
    },
  ] -> joinWith(" ");
}
