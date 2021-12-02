open Js.Array2;

open QuoteGap;
type quoteGap = { style: QuoteGap.variant }
@module("./Gap/QuoteGapStyle.css.js") external quoteGap: quoteGap = "QuoteGapStyle"

open QuotePosition;
type quotePosition = { style: QuotePosition.variant }
@module("./Position/QuotePositionStyle.css.js") external quotePosition: quotePosition = "QuotePositionStyle"

open QuoteSize;
type quoteSize = { style: QuoteSize.variant }
@module("./Size/QuoteSizeStyle.css.js") external quoteSize: quoteSize = "QuoteSizeStyle"

open QuoteSymbol;
type quoteSymbol = { style: QuoteSymbol.variant }
@module("./Symbol/QuoteSymbolStyle.css.js") external quoteSymbol: quoteSymbol = "QuoteSymbolStyle"

module QuoteLayer = {
  @genType
  type i = {
    "quoteGap": QuoteGap.t,
    "quotePosition": QuotePosition.t,
    "quoteSize": QuoteSize.t,
    "quoteSymbol": QuoteSymbol.t,
  }

  @genType
  let resolve = (i) => [
    switch (i["quoteGap"]) {
    | #none     => quoteGap.style["none"]
    | #xxxsmall => quoteGap.style["xxxsmall"]
    | #xxsmall  => quoteGap.style["xxsmall"]
    | #xsmall   => quoteGap.style["xsmall"]
    | #small    => quoteGap.style["small"]
    | #medium   => quoteGap.style["medium"]
    | #large    => quoteGap.style["large"]
    | #xlarge   => quoteGap.style["xlarge"]
    | #xxlarge  => quoteGap.style["xxlarge"]
    | #xxxlarge => quoteGap.style["xxxlarge"]
    },

    switch (i["quotePosition"]) {
    | #inside  => quotePosition.style["inside"]
    | #outside => quotePosition.style["outside"]
    },

    switch (i["quoteSize"]) {
    | #none     => quoteSize.style["none"]
    | #xxxsmall => quoteSize.style["xxxsmall"]
    | #xxsmall  => quoteSize.style["xxsmall"]
    | #xsmall   => quoteSize.style["xsmall"]
    | #small    => quoteSize.style["small"]
    | #medium   => quoteSize.style["medium"]
    | #large    => quoteSize.style["large"]
    | #xlarge   => quoteSize.style["xlarge"]
    | #xxlarge  => quoteSize.style["xxlarge"]
    | #xxxlarge => quoteSize.style["xxxlarge"]
    },

    switch (i["quoteSymbol"]) {
    | #none             => quoteSymbol.style["none"]
    | #LeftDouble       => quoteSymbol.style["LeftDouble"]
    | #RightDouble      => quoteSymbol.style["RightDouble"]
    | #RightDoubleAngle => quoteSymbol.style["RightDoubleAngle"]
    | #LeftDoubleAngle  => quoteSymbol.style["LeftDoubleAngle"]
    },
  ] -> joinWith(" ");
}
