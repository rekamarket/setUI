open Cx

open Color;
type colorStyle = { style: Color.variant }
@module("./ColorStyle.css.js") external colorStyle: colorStyle = "ColorStyle"

module ColorLayer = {
  @genType
  let resolve = (
    ~color: Color.t,
  ) => cx([
    switch (color) {
    | #primary   => colorStyle.style["primary"]
    | #secondary => colorStyle.style["secondary"]
    | #black     => colorStyle.style["black"]
    | #white     => colorStyle.style["white"]
    },
  ]);
}
