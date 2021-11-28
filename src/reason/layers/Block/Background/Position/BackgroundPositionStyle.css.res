open BackgroundPosition

@module("@vanilla-extract/css") external styleVariants: (BackgroundPosition.options, BackgroundPosition.cssResolve) => BackgroundPosition.variant = "styleVariants"

module BackgroundPositionStyle = {
  include BackgroundPosition;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #top => style["top"]
    | #bottom => style["bottom"]
    | #left => style["left"]
    | #right => style["right"]
    | #center => style["center"]
    | #inherit => style["inherit"]
    | #initial => style["initial"]
    | #revert => style["revert"]
    | #unset => style["unset"]
    };
  }
}
