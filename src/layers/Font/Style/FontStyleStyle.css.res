type options = FontStyle.options
type resolve = FontStyle.resolve
type variant = FontStyle.variant
let { options } = module(FontStyle)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, (value) => {{ fontStyle: value }})
