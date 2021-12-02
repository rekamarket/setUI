open CharsPerLine

@module("@vanilla-extract/css") external styleVariants: (CharsPerLine.options, CharsPerLine.cssResolve) => CharsPerLine.variant = "styleVariants"

module CharsPerLineStyle = {
  include CharsPerLine;

  let style = styleVariants(options, (value) => {{ "maxWidth": value }})
}
