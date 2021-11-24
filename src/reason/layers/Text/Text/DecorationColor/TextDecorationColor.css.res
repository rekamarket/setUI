open TextDecorationColorIndex

@module("@vanilla-extract/css") external styleVariants: (TextDecorationColorIndex.options, TextDecorationColorIndex.cssResolve) => TextDecorationColorIndex.variant = "styleVariants"

module TextDecorationColor = {
  include TextDecorationColorIndex

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
