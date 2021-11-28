open BorderThicknessIndex

@module("@vanilla-extract/css") external styleVariants: (BorderThicknessIndex.options, BorderThicknessIndex.cssResolve) => BorderThicknessIndex.variant = "styleVariants"

module BorderThickness = {
  include BorderThicknessIndex;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #none => style["none"]
    | #thin => style["thin"]
    | #light => style["light"]
    | #medium => style["medium"]
    | #bold => style["bold"]
    };
  }
}
