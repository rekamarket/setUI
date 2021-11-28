open BorderStyleIndex

@module("@vanilla-extract/css") external styleVariants: (BorderStyleIndex.options, BorderStyleIndex.cssResolve) => BorderStyleIndex.variant = "styleVariants"

module BorderStyle = {
  include BorderStyleIndex;

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
