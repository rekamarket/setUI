type options = TextTransform.options
type resolve = TextTransform.resolve
type variant = TextTransform.variant
let { options } = module(TextTransform)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, (value) => {{ textTransform: value }})
