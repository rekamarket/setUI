open TextDecorationThickness

@module("@vanilla-extract/css") external styleVariants: (TextDecorationThickness.options, TextDecorationThickness.cssResolve) => TextDecorationThickness.variant = "styleVariants"

module TextDecorationThicknessStyle = {
  include TextDecorationThickness

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
      | #auto => style["auto"]
      | #fromFont => style["fromFont"]
      | #thin => style["thin"]
      | #light => style["light"]
      | #medium => style["medium"]
      | #bold => style["bold"]
      | #inherit => style["inherit"]
      | #initial => style["initial"]
      | #unset => style["unset"]
    };
  }
}
