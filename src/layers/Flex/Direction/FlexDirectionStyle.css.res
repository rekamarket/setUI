type options = FlexDirection.options
type resolve = FlexDirection.resolve
type variant = FlexDirection.variant
let {options} = module(FlexDirection)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, value => {{flexDirection: value}})
