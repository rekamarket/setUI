open Js.Array2;

open MarkerGap;
type markerGap = { style: MarkerGap.variant }
@module("./Gap/MarkerGapStyle.css.js") external markerGap: markerGap = "MarkerGapStyle"

open MarkerPosition;
type markerPosition = { style: MarkerPosition.variant }
@module("./Position/MarkerPositionStyle.css.js") external markerPosition: markerPosition = "MarkerPositionStyle"

open MarkerSize;
type markerSize = { style: MarkerSize.variant }
@module("./Size/MarkerSizeStyle.css.js") external markerSize: markerSize = "MarkerSizeStyle"

open MarkerSymbol;
type markerSymbol = { style: MarkerSymbol.variant }
@module("./Symbol/MarkerSymbolStyle.css.js") external markerSymbol: markerSymbol = "MarkerSymbolStyle"

module MarkerLayer = {
  @genType
  type i = {
    "markerGap": MarkerGap.t,
    "markerPosition": MarkerPosition.t,
    "markerSize": MarkerSize.t,
    "markerSymbol": MarkerSymbol.t,
  }

  @genType
  let resolve = (i) => [
    switch (i["markerGap"]) {
    | #none     => markerGap.style["none"]
    | #xxxsmall => markerGap.style["xxxsmall"]
    | #xxsmall  => markerGap.style["xxsmall"]
    | #xsmall   => markerGap.style["xsmall"]
    | #small    => markerGap.style["small"]
    | #medium   => markerGap.style["medium"]
    | #large    => markerGap.style["large"]
    | #xlarge   => markerGap.style["xlarge"]
    | #xxlarge  => markerGap.style["xxlarge"]
    | #xxxlarge => markerGap.style["xxxlarge"]
    },

    switch (i["markerPosition"]) {
    | #inside  => markerPosition.style["inside"]
    | #outside => markerPosition.style["outside"]
    },

    switch (i["markerSize"]) {
    | #none     => markerSize.style["none"]
    | #xxxsmall => markerSize.style["xxxsmall"]
    | #xxsmall  => markerSize.style["xxsmall"]
    | #xsmall   => markerSize.style["xsmall"]
    | #small    => markerSize.style["small"]
    | #medium   => markerSize.style["medium"]
    | #large    => markerSize.style["large"]
    | #xlarge   => markerSize.style["xlarge"]
    | #xxlarge  => markerSize.style["xxlarge"]
    | #xxxlarge => markerSize.style["xxxlarge"]
    },

    switch (i["markerSymbol"]) {
    | #none   => markerSymbol.style["none"]
    | #bullet => markerSymbol.style["bullet"]
    | #circle => markerSymbol.style["circle"]
    },
  ] -> joinWith(" ");
}
