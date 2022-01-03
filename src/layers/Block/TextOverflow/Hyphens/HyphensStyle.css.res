open Hyphens

@module("@vanilla-extract/css") external styleVariants: (Hyphens.options, Hyphens.cssResolve) => Hyphens.variant = "styleVariants"

module HyphensStyle = {
  include Hyphens

  let style = styleVariants(options, (value) => {{ "hyphens": value }})
}
