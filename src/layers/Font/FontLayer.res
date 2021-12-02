open Js.Array2;

open FontFamily;
type fontFamily = { style: FontFamily.variant }
@module("./Family/FontFamilyStyle.css.js") external fontFamily: fontFamily = "FontFamilyStyle"

open FontSize;
type fontSize = { style: FontSize.variant }
@module("./Size/FontSizeStyle.css.js") external fontSize: fontSize = "FontSizeStyle"

open FontStyle;
type fontStyle = { style: FontStyle.variant }
@module("./Style/FontStyleStyle.css.js") external fontStyle: fontStyle = "FontStyleStyle"

open FontWeight;
type fontWeight = { style: FontWeight.variant }
@module("./Weight/FontWeightStyle.css.js") external fontWeight: fontWeight = "FontWeightStyle"

module FontLayer = {
  @genType
  type i = {
    "fontFamily": FontFamily.t,
    "fontSize": FontSize.t,
    "fontStyle": FontStyle.t,
    "fontWeight": FontWeight.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["fontFamily"]) {
    | #primary   => fontFamily.style["primary"]
    | #monospace => fontFamily.style["monospace"]
    },

    switch (i["fontSize"]) {
    | #none     => fontSize.style["none"]
    | #xxxsmall => fontSize.style["xxxsmall"]
    | #xxsmall  => fontSize.style["xxsmall"]
    | #xsmall   => fontSize.style["xsmall"]
    | #small    => fontSize.style["small"]
    | #medium   => fontSize.style["medium"]
    | #large    => fontSize.style["large"]
    | #xlarge   => fontSize.style["xlarge"]
    | #xxlarge  => fontSize.style["xxlarge"]
    | #xxxlarge => fontSize.style["xxxlarge"]
    | #smaller  => fontSize.style["smaller"]
    | #larger   => fontSize.style["larger"]
    },

    switch (i["fontStyle"]) {
    | #normal  => fontStyle.style["normal"]
    | #italic  => fontStyle.style["italic"]
    | #oblique => fontStyle.style["oblique"]
    | #inherit => fontStyle.style["inherit"]
    | #initial => fontStyle.style["initial"]
    | #unset   => fontStyle.style["unset"]
    },

    switch (i["fontWeight"]) {
    | #thin       => fontWeight.style["thin"]
    | #extraLight => fontWeight.style["extraLight"]
    | #light      => fontWeight.style["light"]
    | #normal     => fontWeight.style["normal"]
    | #medium     => fontWeight.style["medium"]
    | #semiBold   => fontWeight.style["semiBold"]
    | #bold       => fontWeight.style["bold"]
    | #extraBold  => fontWeight.style["extraBold"]
    | #heavy      => fontWeight.style["heavy"]
    | #lighter    => fontWeight.style["lighter"]
    | #bolder     => fontWeight.style["bolder"]
    | #inherit    => fontWeight.style["inherit"]
    | #initial    => fontWeight.style["initial"]
    | #unset      => fontWeight.style["unset"]
    },
  ] -> joinWith(" ");
}
