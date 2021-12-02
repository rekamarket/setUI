open Js.Array2;

open TextDecorationColor;
type textDecorationColor = { style: TextDecorationColor.variant }
@module("./Color/TextDecorationColorStyle.css.js") external textDecorationColor: textDecorationColor = "TextDecorationColorStyle"

open TextDecorationLine;
type textDecorationLine = { style: TextDecorationLine.variant }
@module("./Line/TextDecorationLineStyle.css.js") external textDecorationLine: textDecorationLine = "TextDecorationLineStyle"

open TextDecorationStyle;
type textDecorationStyle = { style: TextDecorationStyle.variant }
@module("./Style/TextDecorationStyleStyle.css.js") external textDecorationStyle: textDecorationStyle = "TextDecorationStyleStyle"

open TextDecorationThickness;
type textDecorationThickness = { style: TextDecorationThickness.variant }
@module("./Thickness/TextDecorationThicknessStyle.css.js") external textDecorationThickness: textDecorationThickness = "TextDecorationThicknessStyle"

module TextDecorationLayer = {
  @genType
  type i = {
    "textDecorationColor": TextDecorationColor.t,
    "textDecorationLine": TextDecorationLine.t,
    "textDecorationStyle": TextDecorationStyle.t,
    "textDecorationThickness": TextDecorationThickness.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["textDecorationColor"]) {
    | #currentColor => textDecorationColor.style["currentColor"]
    | #primary      => textDecorationColor.style["primary"]
    | #secondary    => textDecorationColor.style["secondary"]
    | #black        => textDecorationColor.style["black"]
    | #white        => textDecorationColor.style["white"]
    },

    switch (i["textDecorationLine"]) {
    | #none                           => textDecorationLine.style["none"]
    | #underline                      => textDecorationLine.style["underline"]
    | #overline                       => textDecorationLine.style["overline"]
    | #lineThrough                    => textDecorationLine.style["lineThrough"]
    | #blink                          => textDecorationLine.style["blink"]
    | #overline_lineThrough           => textDecorationLine.style["overline_lineThrough"]
    | #overline_underline             => textDecorationLine.style["overline_underline"]
    | #lineThrough_underline          => textDecorationLine.style["lineThrough_underline"]
    | #overline_lineThrough_underline => textDecorationLine.style["overline_lineThrough_underline"]
    | #inherit                        => textDecorationLine.style["inherit"]
    | #initial                        => textDecorationLine.style["initial"]
    | #unset                          => textDecorationLine.style["unset"]
    },

    switch (i["textDecorationStyle"]) {
    | #solid   => textDecorationStyle.style["solid"]
    | #double  => textDecorationStyle.style["double"]
    | #dotted  => textDecorationStyle.style["dotted"]
    | #dashed  => textDecorationStyle.style["dashed"]
    | #wavy    => textDecorationStyle.style["wavy"]
    | #inherit => textDecorationStyle.style["inherit"]
    | #initial => textDecorationStyle.style["initial"]
    | #unset   => textDecorationStyle.style["unset"]
    },

    switch (i["textDecorationThickness"]) {
    | #auto     => textDecorationThickness.style["auto"]
    | #fromFont => textDecorationThickness.style["fromFont"]
    | #thin     => textDecorationThickness.style["thin"]
    | #light    => textDecorationThickness.style["light"]
    | #medium   => textDecorationThickness.style["medium"]
    | #bold     => textDecorationThickness.style["bold"]
    | #inherit  => textDecorationThickness.style["inherit"]
    | #initial  => textDecorationThickness.style["initial"]
    | #unset    => textDecorationThickness.style["unset"]
    },
  ] -> joinWith(" ");
}
