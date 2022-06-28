type options = MarginReflection.options
type resolve = MarginInlineEnd.resolve
type variant = MarginReflection.variant
let { options } = module(MarginReflection)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, (value) => {{ marginInlineEnd: value }})
