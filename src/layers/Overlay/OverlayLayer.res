open Js.Array2;

open OverlayColor;
type overlayColor = { style: OverlayColor.variant }
@module("./Color/OverlayColorStyle.css.js") external overlayColor: overlayColor = "OverlayColorStyle"

module OverlayLayer = {
  @genType
  type i = {
    "overlayColor": OverlayColor.t,
  };

  @genType
  let resolve = (i) => [
    switch (i["overlayColor"]) {
    | #primary   => overlayColor.style["primary"]
    | #secondary => overlayColor.style["secondary"]
    | #black     => overlayColor.style["black"]
    | #white     => overlayColor.style["white"]
    },
  ] -> joinWith(" ");
}
