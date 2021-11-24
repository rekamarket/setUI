open TextDecorationThicknessIndex

@module("@vanilla-extract/css") external styleVariants: (TextDecorationThicknessIndex.options, TextDecorationThicknessIndex.cssResolve) => TextDecorationThicknessIndex.variant = "styleVariants"

module TextDecorationThickness = {
  include TextDecorationThicknessIndex

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
