type options = TextAlign.options
type resolve = TextAlign.resolve
type variant = TextAlign.variant
let {options} = module(TextAlign)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, value => {{textAlign: value}})
