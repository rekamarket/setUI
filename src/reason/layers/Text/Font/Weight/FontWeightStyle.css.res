open FontWeight

@module("@vanilla-extract/css") external styleVariants: (FontWeight.options, FontWeight.cssResolve) => FontWeight.variant = "styleVariants"

module FontWeightStyle = {
  include FontWeight

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
