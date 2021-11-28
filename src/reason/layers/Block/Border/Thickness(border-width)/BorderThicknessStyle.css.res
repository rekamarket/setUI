open BorderThickness

@module("@vanilla-extract/css") external styleVariants: (BorderThickness.options, BorderThickness.cssResolve) => BorderThickness.variant = "styleVariants"

module BorderThicknessStyle = {
  include BorderThickness;

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
