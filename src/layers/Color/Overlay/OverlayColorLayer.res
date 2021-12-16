open Js.Array2;
open OverlayColor;

type color = { style: OverlayColor.variant }
@module("./OverlayColorStyle.css.js") external color: color = "OverlayColorStyle"

module OverlayColorLayer = {
  @genType
  type i = {
    "color": OverlayColor.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["color"]) {
    | #primary   => color.style["primary"]
    | #secondary => color.style["secondary"]
    | #black     => color.style["black"]
    | #white     => color.style["white"]
    },
  ] -> joinWith(" ");
}
