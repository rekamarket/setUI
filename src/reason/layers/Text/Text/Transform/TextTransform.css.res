open TextTransformIndex

@module("@vanilla-extract/css") external styleVariants: (TextTransformIndex.options, TextTransformIndex.cssResolve) => TextTransformIndex.variant = "styleVariants"

module TextTransform = {
  include TextTransformIndex

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
