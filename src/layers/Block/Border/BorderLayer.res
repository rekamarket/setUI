open Js.Array2;

open BorderColor;
type borderColor = { style: BorderColor.variant }
@module("./Color/BorderColorStyle.css.js") external borderColor: borderColor = "BorderColorStyle"

open BorderOpacity;
type borderOpacity = { style: BorderOpacity.variant }
@module("./Opacity/BorderOpacityStyle.css.js") external borderOpacity: borderOpacity = "BorderOpacityStyle"

open BorderStyle;
type borderStyle = { style: BorderStyle.variant }
@module("./Style/BorderStyleStyle.css.js") external borderStyle: borderStyle = "BorderStyleStyle"

open BorderThickness;
type borderThickness = { style: BorderThickness.variant }
@module("./Thickness/BorderThicknessStyle.css.js") external borderThickness: borderThickness = "BorderThicknessStyle"

module BorderLayer = {
  @genType
  type i = {
    "borderColor": BorderColor.t,
    "borderOpacity": BorderOpacity.t,
    "borderStyle": BorderStyle.t,
    "borderThickness": BorderThickness.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["borderColor"]) {
    | #primary   => borderColor.style["primary"]
    | #secondary => borderColor.style["secondary"]
    | #white     => borderColor.style["white"]
    | #black     => borderColor.style["black"]
    },

    switch (i["borderOpacity"]) {
    | #0   => borderOpacity.style["0"]
    | #10  => borderOpacity.style["10"]
    | #20  => borderOpacity.style["20"]
    | #30  => borderOpacity.style["30"]
    | #40  => borderOpacity.style["40"]
    | #50  => borderOpacity.style["50"]
    | #60  => borderOpacity.style["60"]
    | #70  => borderOpacity.style["70"]
    | #80  => borderOpacity.style["80"]
    | #90  => borderOpacity.style["90"]
    | #100 => borderOpacity.style["100"]
    },

    switch (i["borderStyle"]) {
    | #none    => borderStyle.style["none"]
    | #hidden  => borderStyle.style["hidden"]
    | #dotted  => borderStyle.style["dotted"]
    | #dashed  => borderStyle.style["dashed"]
    | #solid   => borderStyle.style["solid"]
    | #double  => borderStyle.style["double"]
    | #groove  => borderStyle.style["groove"]
    | #ridge   => borderStyle.style["ridge"]
    | #inset   => borderStyle.style["inset"]
    | #outset  => borderStyle.style["outset"]
    | #inherit => borderStyle.style["inherit"]
    | #initial => borderStyle.style["initial"]
    | #revert  => borderStyle.style["revert"]
    | #unset   => borderStyle.style["unset"]
    },

    switch (i["borderThickness"]) {
    | #none   => borderThickness.style["none"]
    | #thin   => borderThickness.style["thin"]
    | #light  => borderThickness.style["light"]
    | #medium => borderThickness.style["medium"]
    | #bold   => borderThickness.style["bold"]
    },
  ] -> joinWith(" ");
}
