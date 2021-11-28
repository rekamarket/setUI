open TextDecorationColor

@module("@vanilla-extract/css") external styleVariants: (TextDecorationColor.options, TextDecorationColor.cssResolve) => TextDecorationColor.variant = "styleVariants"

module TextDecorationColorStyle = {
  include TextDecorationColor

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #currentColor => style["currentColor"]
    | #primary => style["primary"]
    | #secondary => style["secondary"]
    | #black => style["black"]
    | #white => style["white"]
    };
  }
}
