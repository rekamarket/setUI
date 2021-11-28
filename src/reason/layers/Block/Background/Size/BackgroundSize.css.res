open BackgroundSizeIndex

@module("@vanilla-extract/css") external styleVariants: (BackgroundSizeIndex.options, BackgroundSizeIndex.cssResolve) => BackgroundSizeIndex.variant = "styleVariants"

module BackgroundSize = {
  include BackgroundSizeIndex;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #cover => style["cover"]
    | #contain => style["contain"]
    | #50 => style["50"]
    | #auto => style["auto"]
    | #inherit => style["inherit"]
    | #initial => style["initial"]
    | #revert => style["revert"]
    | #unset => style["unset"]
    };
  }
}
