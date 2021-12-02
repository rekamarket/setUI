open MaxInlineSizeByCharacters

@module("@vanilla-extract/css") external styleVariants: (MaxInlineSizeByCharacters.options, MaxInlineSizeByCharacters.cssResolve) => MaxInlineSizeByCharacters.variant = "styleVariants"

module MaxInlineSizeByCharactersStyle = {
  include MaxInlineSizeByCharacters;

  let style = styleVariants(options, (value) => {{ "--max-inline-size-by-characters": value }})
}
