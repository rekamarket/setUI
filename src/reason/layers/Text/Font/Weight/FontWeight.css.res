open FontWeightIndex

@module("@vanilla-extract/css") external styleVariants: (FontWeightIndex.options, FontWeightIndex.cssResolve) => FontWeightIndex.variant = "styleVariants"

module FontWeight = {
  include FontWeightIndex

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #thin => style["thin"]
    | #extraLight => style["extraLight"]
    | #light => style["light"]
    | #normal => style["normal"]
    | #medium => style["medium"]
    | #semiBold => style["semiBold"]
    | #bold => style["bold"]
    | #extraBold => style["extraBold"]
    | #heavy => style["heavy"]
    | #lighter => style["lighter"]
    | #bolder => style["bolder"]
    | #inherit => style["inherit"]
    | #initial => style["initial"]
    | #unset => style["unset"]
    };
  }
}
