open TextDecorationLineIndex

@module("@vanilla-extract/css") external styleVariants: (TextDecorationLineIndex.options, TextDecorationLineIndex.cssResolve) => TextDecorationLineIndex.variant = "styleVariants"

module TextDecorationLine = {
  include TextDecorationLineIndex

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
