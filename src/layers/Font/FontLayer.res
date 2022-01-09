open Cx;

open FontFamily;
type family = { style: FontFamily.variant }
@module("./Family/FontFamilyStyle.css.js") external family: family = "FontFamilyStyle"

open FontSize;
type size = { style: FontSize.variant }
@module("./Size/FontSizeStyle.css.js") external size: size = "FontSizeStyle"

open FontStyle;
type style = { style: FontStyle.variant }
@module("./Style/FontStyleStyle.css.js") external style: style = "FontStyleStyle"

open FontWeight;
type weight = { style: FontWeight.variant }
@module("./Weight/FontWeightStyle.css.js") external weight: weight = "FontWeightStyle"

module FontLayer = {
  @genType
  let resolve = (
    ~fontFamily: FontFamily.t,
    ~fontSize: FontSize.t,
    ~fontStyle: FontStyle.t,
    ~fontWeight: FontWeight.t,
  ) => cx([
    switch (fontFamily) {
    | #primary   => family.style["primary"]
    | #monospace => family.style["monospace"]
    },

    switch (fontSize) {
    | #none     => size.style["none"]
    | #xxxsmall => size.style["xxxsmall"]
    | #xxsmall  => size.style["xxsmall"]
    | #xsmall   => size.style["xsmall"]
    | #small    => size.style["small"]
    | #medium   => size.style["medium"]
    | #large    => size.style["large"]
    | #xlarge   => size.style["xlarge"]
    | #xxlarge  => size.style["xxlarge"]
    | #xxxlarge => size.style["xxxlarge"]
    | #smaller  => size.style["smaller"]
    | #larger   => size.style["larger"]
    },

    switch (fontStyle) {
    | #normal  => style.style["normal"]
    | #italic  => style.style["italic"]
    | #oblique => style.style["oblique"]
    | #inherit => style.style["inherit"]
    | #initial => style.style["initial"]
    | #unset   => style.style["unset"]
    },

    switch (fontWeight) {
    | #thin       => weight.style["thin"]
    | #extraLight => weight.style["extraLight"]
    | #light      => weight.style["light"]
    | #normal     => weight.style["normal"]
    | #medium     => weight.style["medium"]
    | #semiBold   => weight.style["semiBold"]
    | #bold       => weight.style["bold"]
    | #extraBold  => weight.style["extraBold"]
    | #heavy      => weight.style["heavy"]
    | #lighter    => weight.style["lighter"]
    | #bolder     => weight.style["bolder"]
    | #inherit    => weight.style["inherit"]
    | #initial    => weight.style["initial"]
    | #unset      => weight.style["unset"]
    },
  ]);
}
