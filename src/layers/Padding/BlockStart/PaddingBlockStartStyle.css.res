type options = PaddingReflection.options
type resolve = PaddingBlockStart.resolve
type variant = PaddingReflection.variant
let { options } = module(PaddingReflection)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, (value) => {{ paddingBlockStart: value }})
