open Js.Array2;
open InteractiveColor;

type color = { style: InteractiveColor.variant }
@module("./InteractiveColorStyle.css.js") external color: color = "InteractiveColorStyle"

module InteractiveColorLayer = {
  @genType
  type i = {
    "color": InteractiveColor.t,
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
