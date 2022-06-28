type options = MarkerSize.options
type resolve = MarkerSize.resolve
type variant = MarkerSize.variant
let {options} = module(MarkerSize)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, value => {{size: value}})
