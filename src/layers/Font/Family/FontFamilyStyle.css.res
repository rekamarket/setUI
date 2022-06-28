type options = FontFamily.options
type resolve = FontFamily.resolve
type variant = FontFamily.variant
let { options } = module(FontFamily)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, (value) => {{ fontFamily: value }})
