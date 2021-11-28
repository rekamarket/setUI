open Outline

@module("@vanilla-extract/css") external styleVariants: (Outline.options, Outline.cssResolve) => Outline.variant = "styleVariants"

module OutlineStyle = {
  include Outline;

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
