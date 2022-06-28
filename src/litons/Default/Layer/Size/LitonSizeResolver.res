type t = LitonSize.t
type variant = LitonSize.variant

@module("./LitonSizeStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #xs => style.xs
  | #s => style.s
  | #m => style.m
  | #l => style.l
  | #xl => style.xl
  }
