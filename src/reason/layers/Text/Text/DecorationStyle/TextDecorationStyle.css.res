open TextDecorationStyleIndex

@module("@vanilla-extract/css") external styleVariants: (TextDecorationStyleIndex.options, TextDecorationStyleIndex.cssResolve) => TextDecorationStyleIndex.variant = "styleVariants"

module TextDecorationStyle = {
  include TextDecorationStyleIndex

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
