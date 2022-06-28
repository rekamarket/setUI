type options = CornerRadius.options
type resolve = CornerRadius.resolve
type variant = CornerRadius.variant
let { options } = module(CornerRadius)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, (value) => {{ borderRadius: value }})
