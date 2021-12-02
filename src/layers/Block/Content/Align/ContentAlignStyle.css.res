open ContentAlign

@module("@vanilla-extract/css") external styleVariants: (ContentAlign.options, ContentAlign.cssResolve) => ContentAlign.variant = "styleVariants"

module ContentAlignStyle = {
  include ContentAlign;

  let style = styleVariants(options, (value) => {{ "textAlign": value }})
}
