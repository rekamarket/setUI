open Cx

open TextTransform;
type transform = { style: TextTransform.variant }
@module("./Transform/TextTransformStyle.css.js") external transform: transform = "TextTransformStyle"

module TextTransformLayer = {
  @genType
  let resolve = (
    ~textTransform: TextTransform.t,
  ) => cx([
    switch (textTransform) {
    | #none         => transform.style["none"]
    | #uppercase    => transform.style["uppercase"]
    | #lowercase    => transform.style["lowercase"]
    | #capitalize   => transform.style["capitalize"]
    | #fullWidth    => transform.style["fullWidth"]
    | #fullSizeKana => transform.style["fullSizeKana"]
    },
  ]);
}
