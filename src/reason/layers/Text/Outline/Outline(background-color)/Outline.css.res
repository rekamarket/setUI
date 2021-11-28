open OutlineIndex

@module("@vanilla-extract/css") external styleVariants: (OutlineIndex.options, OutlineIndex.cssResolve) => OutlineIndex.variant = "styleVariants"

module Outline = {
  include OutlineIndex;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #primary => style["primary"]
    | #secondary => style["secondary"]
    | #black => style["black"]
    | #white => style["white"]
    | #transparent => style["transparent"]
    | #initial => style["initial"]
    };
  }
}
