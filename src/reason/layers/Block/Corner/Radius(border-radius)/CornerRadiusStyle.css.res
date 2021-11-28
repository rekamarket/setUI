open CornerRadius

@module("@vanilla-extract/css") external styleVariants: (CornerRadius.options, CornerRadius.cssResolve) => CornerRadius.variant = "styleVariants"

module CornerRadiusStyle = {
  include CornerRadius;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #none => style["none"]
    | #small => style["small"]
    | #medium => style["medium"]
    | #large => style["large"]
    | #pill => style["pill"]
    | #circle => style["circle"]
    };
  }
}
