type options = MarkerGap.options
type resolve = MarkerGap.resolve
type variant = MarkerGap.variant
let {options} = module(MarkerGap)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, value => {{gap: value}})
