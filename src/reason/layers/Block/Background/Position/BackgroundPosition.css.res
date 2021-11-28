open BackgroundPositionIndex

@module("@vanilla-extract/css") external styleVariants: (BackgroundPositionIndex.options, BackgroundPositionIndex.cssResolve) => BackgroundPositionIndex.variant = "styleVariants"

module BackgroundPosition = {
  include BackgroundPositionIndex;

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
