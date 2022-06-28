type options = LineClamp.options
type resolve = LineClamp.resolve
type variant = LineClamp.variant
let {options} = module(LineClamp)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, value => {
  {
    overflow: value.overflow,
    display: value.display,
    clamp: value.clamp,
    orient: value.orient,
  }
})
