type t = FontStyle.t
type variant = FontStyle.variant

@module("./FontStyleStyle.css.js") external style: variant = "make"

let make = (. key: t) => switch (key) {
| #normal  => style.normal
}
