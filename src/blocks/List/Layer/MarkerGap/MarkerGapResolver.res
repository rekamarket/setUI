type t = MarkerGap.t
type variant = MarkerGap.variant

@module("./MarkerGapStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #none => style.none
  | #s => style.s
  | #m => style.m
  | #l => style.l
  }
