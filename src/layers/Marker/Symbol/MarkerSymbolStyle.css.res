open MarkerSymbol

@module("@vanilla-extract/css") external styleVariants: (MarkerSymbol.options, MarkerSymbol.cssResolve) => MarkerSymbol.variant = "styleVariants"

module MarkerSymbolStyle = {
  include MarkerSymbol

  let style = styleVariants(options, (value) => {
    {
      "--marker-symbol": value,
      "listStyleType": value,
    }
  })
}
