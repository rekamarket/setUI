type options = JustifySelf.options
type resolve = JustifySelf.resolve
type variant = JustifySelf.variant
let {options} = module(JustifySelf)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, value => {{justifySelf: value}})
