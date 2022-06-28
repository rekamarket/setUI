type options = LitonColor.options
type resolve = LitonColor.resolve
type variant = LitonColor.variant
let {options} = module(LitonColor)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, value => {
  {
    textColor: value.textColor,
    accentColor: value.accentColor,
    transition: ".2s color ease-in, .2s background ease-in",
    hover: value.hover,
    active: value.active,
    // disabled: value.disabled,
  }
})
