type t = JustifySelf.t
type variant = JustifySelf.variant

@module("./JustifySelfStyle.css.js") external style: variant = "make"

let make = (. key: t) =>
  switch key {
  | #auto => style.auto
  | #normal => style.normal
  | #stretch => style.stretch
  | #center => style.center
  | #start => style.start
  | #end => style.end
  | #baseline => style.baseline
  }
