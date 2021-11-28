open BackgroundColorIndex

@module("@vanilla-extract/css") external styleVariants: (BackgroundColorIndex.options, BackgroundColorIndex.cssResolve) => BackgroundColorIndex.variant = "styleVariants"

module BackgroundColor = {
  include BackgroundColorIndex;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #primary => style["primary"]
    | #secondary => style["secondary"]
    | #white => style["white"]
    | #black => style["black"]
    };
  }
}
