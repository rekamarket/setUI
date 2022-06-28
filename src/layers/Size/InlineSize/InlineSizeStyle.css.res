type options = InlineSize.options
type resolve = InlineSize.resolve
type variant = InlineSize.variant
let {options} = module(InlineSize)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, value => {{inlineSize: value}})
