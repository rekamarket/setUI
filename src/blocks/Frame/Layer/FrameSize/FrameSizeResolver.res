type t = FrameSize.t
type variant = FrameSize.variant

@module("./FrameSizeStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #none => style.none
  | #s => style.s
  | #m => style.m
  | #l => style.l
  }
