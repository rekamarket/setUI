type options = MarkerPosition.options
type resolve = MarkerPosition.resolve
type variant = MarkerPosition.variant
let {options} = module(MarkerPosition)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, value => {{position: value}})
