open Js.Array2;

open CornerRadius;
type cornerRadius = { style: CornerRadius.variant }
@module("./Radius/CornerRadiusStyle.css.js") external cornerRadius: cornerRadius = "CornerRadiusStyle"

module CornerLayer = {
  @genType
  type i = {
    "cornerRadius": CornerRadius.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["cornerRadius"]) {
    | #none   => cornerRadius.style["none"]
    | #xsmall  => cornerRadius.style["xsmall"]
    | #small  => cornerRadius.style["small"]
    | #medium => cornerRadius.style["medium"]
    | #large  => cornerRadius.style["large"]
    | #xlarge => cornerRadius.style["xlarge"]
    | #pill   => cornerRadius.style["pill"]
    | #circle => cornerRadius.style["circle"]
    },
  ] -> joinWith(" ");
}
