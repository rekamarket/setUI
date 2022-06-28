type options = MarkerType.options
type resolve = MarkerType.resolve
type variant = MarkerType.variant
let {options} = module(MarkerType)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, value => {{symbol: value}})
