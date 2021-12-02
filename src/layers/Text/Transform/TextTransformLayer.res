open Js.Array2;

open TextTransform;
type textTransform = { style: TextTransform.variant }
@module("./Transform/TextTransformStyle.css.js") external textTransform: textTransform = "TextTransformStyle"

module TextTransformLayer = {
  @genType
  type i = {
    "textTransform": TextTransform.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["textTransform"]) {
    | #none         => textTransform.style["none"]
    | #uppercase    => textTransform.style["uppercase"]
    | #lowercase    => textTransform.style["lowercase"]
    | #capitalize   => textTransform.style["capitalize"]
    | #fullWidth    => textTransform.style["fullWidth"]
    | #fullSizeKana => textTransform.style["fullSizeKana"]
    },
  ] -> joinWith(" ");
}
