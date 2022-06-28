type options = FrameSize.options
type resolve = FrameSize.resolve
type variant = FrameSize.variant
let {options} = module(FrameSize)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, value => {{size: value}})
