type options = TextDecorationLine.options
type resolve = TextDecorationLine.resolve
type variant = TextDecorationLine.variant
let { options } = module(TextDecorationLine)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, (value) => {{ textDecorationLine: value }})
