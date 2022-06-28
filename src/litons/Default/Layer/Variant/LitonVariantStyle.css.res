type options = LitonVariant.options
type resolve = LitonVariant.resolve
type variant = LitonVariant.variant
let {options} = module(LitonVariant)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, value => {
  {
    color: value.color,
    backgroundColor: value.backgroundColor,
    borderColor: value.borderColor,
  }
})
