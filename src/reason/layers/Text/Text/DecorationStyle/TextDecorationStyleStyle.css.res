open TextDecorationStyle

@module("@vanilla-extract/css") external styleVariants: (TextDecorationStyle.options, TextDecorationStyle.cssResolve) => TextDecorationStyle.variant = "styleVariants"

module TextDecorationStyleStyle = {
  include TextDecorationStyle

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #solid => style["solid"]
    | #double => style["double"]
    | #dotted => style["dotted"]
    | #dashed => style["dashed"]
    | #wavy => style["wavy"]
    | #inherit => style["inherit"]
    | #initial => style["initial"]
    | #unset => style["unset"]
    };
  }
}
