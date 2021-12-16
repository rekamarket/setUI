open Js.Array2;
open ThemeColor;

type color = { style: ThemeColor.variant }
@module("./ThemeColorStyle.css.js") external color: color = "ThemeColorStyle"

module ThemeColorLayer = {
  @genType
  type i = {
    "color": ThemeColor.t,
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
