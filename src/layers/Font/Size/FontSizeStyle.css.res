type options = FontSize.options
type resolve = FontSize.resolve
type variant = FontSize.variant
let {options} = module(FontSize)

@module("@vanilla-extract/css") external styles: (options, resolve) => variant = "styleVariants"

let make = styles(options, value => {
  let capSize = CapSize.createStyleObject({
    capHeight: value,
    lineGap: value / 4,
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
    transform: "translateY(.1rem)",
    lineHeight: capSize.lineHeight,
    fontSize: capSize.fontSize,
    after: {
      content: `""`,
      marginTop: capSize.\"::after".marginTop,
      display: "table",
    },
    before: {
      content: `""`,
      marginBottom: capSize.\"::before".marginBottom,
      display: "table",
    },
  }
})

// "capHeight": 1462,
// "ascent": 2189,
// "descent": -600,
// "lineGap": 0,
// "unitsPerEm": 2048,
// "xHeight": 1096

// "capHeight": 1469,
// "ascent": 1577,
// "descent": -471,
// "lineGap": 0,
// "unitsPerEm": 2048,
// "xHeight": 1071
