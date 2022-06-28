type options = TextDecorationThickness.options
type resolve = TextDecorationThickness.resolve
type variant = TextDecorationThickness.variant
let { options } = module(TextDecorationThickness)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, (value) => {{ textDecorationThickness: value }})
