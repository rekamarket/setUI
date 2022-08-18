type options = LitonSize.options
type resolve = LitonSize.resolve
type variant = LitonSize.variant
let {options} = module(LitonSize)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, value => {
  let capSize = CapSize.createStyleObject({
    capHeight: value.capSize,
    lineGap: 0,
    fontMetrics: {
      familyName: FontFamily.name.display,
      capHeight: 700,
      ascent: 968,
      descent: -251,
      lineGap: 0,
      unitsPerEm: 1000,
      xHeight: 525,
    },
  })

  {
    paddingBlock: value.paddingBlock,
    paddingInline: value.paddingInline,
    cornerRadius: value.cornerRadius,
    inlineGap: value.inlineGap,
    iconSize: value.iconSize,
    capSize: capSize.fontSize,
    lineGap: `calc(${capSize.lineHeight} + var(--line-gap, 0))`,
    capTop: capSize.\"::after".marginTop,
    capBottom: capSize.\"::before".marginBottom,
  }
})
