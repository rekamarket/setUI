type t = MarkerSize.t
type variant = MarkerSize.variant

@module("./MarkerSizeStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #none => style.none
  | #s => style.s
  | #m => style.m
  | #l => style.l
  }
