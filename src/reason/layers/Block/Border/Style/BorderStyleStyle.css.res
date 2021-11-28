open BorderStyle

@module("@vanilla-extract/css") external styleVariants: (BorderStyle.options, BorderStyle.cssResolve) => BorderStyle.variant = "styleVariants"

module BorderStyleStyle = {
  include BorderStyle;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #none => style["none"]
    | #hidden => style["hidden"]
    | #dotted => style["dotted"]
    | #dashed => style["dashed"]
    | #solid => style["solid"]
    | #double => style["double"]
    | #groove => style["groove"]
    | #ridge => style["ridge"]
    | #inset => style["inset"]
    | #outset => style["outset"]
    | #inherit => style["inherit"]
    | #initial => style["initial"]
    | #revert => style["revert"]
    | #unset => style["unset"]
    };
  }
}
