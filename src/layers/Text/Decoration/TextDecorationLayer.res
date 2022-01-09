open Cx

open TextDecorationColor;
type color = { style: TextDecorationColor.variant }
@module("./Color/TextDecorationColorStyle.css.js") external color: color = "TextDecorationColorStyle"

open TextDecorationLine;
type line = { style: TextDecorationLine.variant }
@module("./Line/TextDecorationLineStyle.css.js") external line: line = "TextDecorationLineStyle"

open TextDecorationStyle;
type style = { style: TextDecorationStyle.variant }
@module("./Style/TextDecorationStyleStyle.css.js") external style: style = "TextDecorationStyleStyle"

open TextDecorationThickness;
type thickness = { style: TextDecorationThickness.variant }
@module("./Thickness/TextDecorationThicknessStyle.css.js") external thickness: thickness = "TextDecorationThicknessStyle"

module TextDecorationLayer = {
  @genType
  let resolve = (
    ~textDecorationColor: TextDecorationColor.t,
    ~textDecorationLine: TextDecorationLine.t,
    ~textDecorationStyle: TextDecorationStyle.t,
    ~textDecorationThickness: TextDecorationThickness.t,
  ) => cx([
    switch (textDecorationColor) {
    | #currentColor => color.style["currentColor"]
    | #primary      => color.style["primary"]
    | #secondary    => color.style["secondary"]
    | #black        => color.style["black"]
    | #white        => color.style["white"]
    },

    switch (textDecorationLine) {
    | #none                           => line.style["none"]
    | #underline                      => line.style["underline"]
    | #overline                       => line.style["overline"]
    | #lineThrough                    => line.style["lineThrough"]
    | #blink                          => line.style["blink"]
    | #overline_lineThrough           => line.style["overline_lineThrough"]
    | #overline_underline             => line.style["overline_underline"]
    | #lineThrough_underline          => line.style["lineThrough_underline"]
    | #overline_lineThrough_underline => line.style["overline_lineThrough_underline"]
    | #inherit                        => line.style["inherit"]
    | #initial                        => line.style["initial"]
    | #unset                          => line.style["unset"]
    },

    switch (textDecorationStyle) {
    | #solid   => style.style["solid"]
    | #double  => style.style["double"]
    | #dotted  => style.style["dotted"]
    | #dashed  => style.style["dashed"]
    | #wavy    => style.style["wavy"]
    | #inherit => style.style["inherit"]
    | #initial => style.style["initial"]
    | #unset   => style.style["unset"]
    },

    switch (textDecorationThickness) {
    | #auto     => thickness.style["auto"]
    | #fromFont => thickness.style["fromFont"]
    | #thin     => thickness.style["thin"]
    | #light    => thickness.style["light"]
    | #medium   => thickness.style["medium"]
    | #bold     => thickness.style["bold"]
    | #inherit  => thickness.style["inherit"]
    | #initial  => thickness.style["initial"]
    | #unset    => thickness.style["unset"]
    },
  ]);
}
