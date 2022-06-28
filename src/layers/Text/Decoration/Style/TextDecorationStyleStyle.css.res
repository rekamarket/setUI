type options = TextDecorationStyle.options
type resolve = TextDecorationStyle.resolve
type variant = TextDecorationStyle.variant
let { options } = module(TextDecorationStyle)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, (value) => {{ textDecorationStyle: value }})
