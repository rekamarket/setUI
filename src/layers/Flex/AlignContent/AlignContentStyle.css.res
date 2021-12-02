open AlignContent

@module("@vanilla-extract/css") external styleVariants: (AlignContent.options, AlignContent.cssResolve) => AlignContent.variant = "styleVariants"

module AlignContentStyle = {
  include AlignContent;

  let style = styleVariants(options, (value) => {{ "alignContent": value }})
}
