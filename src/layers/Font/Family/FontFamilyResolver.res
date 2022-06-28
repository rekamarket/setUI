type t = FontFamily.t
type variant = FontFamily.variant

@module("./FontFamilyStyle.css.js") external style: variant = "make"

let make = (. key: t) => switch (key) {
| #display => style.display
}
