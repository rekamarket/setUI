open TextDecorationLine

@module("@vanilla-extract/css") external styleVariants: (TextDecorationLine.options, TextDecorationLine.cssResolve) => TextDecorationLine.variant = "styleVariants"

module TextDecorationLineStyle = {
  include TextDecorationLine

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
      | #none => style["none"]
      | #underline => style["underline"]
      | #overline => style["overline"]
      | #lineThrough => style["lineThrough"]
      | #blink => style["blink"]
      | #overline_lineThrough => style["overline_lineThrough"]
      | #overline_underline => style["overline_underline"]
      | #lineThrough_underline => style["lineThrough_underline"]
      | #overline_lineThrough_underline => style["overline_lineThrough_underline"]
      | #inherit => style["inherit"]
      | #initial => style["initial"]
      | #unset => style["unset"]
    };
  }
}
