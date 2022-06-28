type options = FontWeight.options
type resolve = FontWeight.resolve
type variant = FontWeight.variant
let { options } = module(FontWeight)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, (value) => {{ fontWeight: value }})
