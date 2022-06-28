type options = Color.options
type resolve = Color.resolve
type variant = Color.variant
let { options } = module(Color)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, (value) => {{ color: value }})
