type t = FontSize.t
type variant = FontSize.variant

@module("./FontSizeStyle.css.js") external style: variant = "make"

let make = (. key: t) => switch (key) {
| #none => style.none
| #\"5xs" => style.\"5xs"
| #\"4xs" => style.\"4xs"
| #\"3xs" => style.\"3xs"
| #\"2xs" => style.\"2xs"
| #xs     => style.xs
| #s      => style.s
| #m      => style.m
| #l      => style.l
| #xl     => style.xl
| #\"2xl" => style.\"2xl"
| #\"3xl" => style.\"3xl"
| #\"4xl" => style.\"4xl"
| #\"5xl" => style.\"5xl"
}
