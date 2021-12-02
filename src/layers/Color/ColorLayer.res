open Js.Array2;

open Color;
type color = { style: Color.variant }
@module("./Color/ColorStyle.css.js") external color: color = "ColorStyle"

module ColorLayer = {
  @genType
  type i = {
    "color": Color.t,
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
