open BackgroundColor

@module("@vanilla-extract/css") external styleVariants: (BackgroundColor.options, BackgroundColor.cssResolve) => BackgroundColor.variant = "styleVariants"

module BackgroundColorStyle = {
  include BackgroundColor;

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
