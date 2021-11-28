open TextTransform

@module("@vanilla-extract/css") external styleVariants: (TextTransform.options, TextTransform.cssResolve) => TextTransform.variant = "styleVariants"

module TextTransformStyle = {
  include TextTransform

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #none => style["none"]
    | #uppercase => style["uppercase"]
    | #lowercase => style["lowercase"]
    | #capitalize => style["capitalize"]
    | #fullWidth => style["fullWidth"]
    | #fullSizeKana => style["fullSizeKana"]
    };
  }
}
