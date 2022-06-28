type t = PaddingReflection.t
type variant = PaddingReflection.variant

@module("./PaddingBlockEndStyle.css.js") external style: variant = "make"

let make = (. key: t) => switch (key) {
| #size0 => style.size0
| #size50 => style.size50
| #size100 => style.size100
| #size150 => style.size150
| #size200 => style.size200
| #size250 => style.size250
| #size300 => style.size300
| #size350 => style.size350
| #size400 => style.size400
| #size450 => style.size450
| #size500 => style.size500
| #size550 => style.size550
| #size600 => style.size600
| #size700 => style.size700
| #size800 => style.size800
}
