open WordBreak

@module("@vanilla-extract/css") external styleVariants: (WordBreak.options, WordBreak.cssResolve) => WordBreak.variant = "styleVariants"

module WordBreakStyle = {
  include WordBreak

  let style = styleVariants(options, (value) => {{ "wordBreak": value }})
}
