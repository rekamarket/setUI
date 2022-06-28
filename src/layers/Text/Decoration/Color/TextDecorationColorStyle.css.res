type options = TextDecorationColor.options
type resolve = TextDecorationColor.resolve
type variant = TextDecorationColor.variant
let { options } = module(TextDecorationColor)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, (value) => {{ textDecorationColor: value }})
