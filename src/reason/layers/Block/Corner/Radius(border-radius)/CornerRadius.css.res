open CornerRadiusIndex

@module("@vanilla-extract/css") external styleVariants: (CornerRadiusIndex.options, CornerRadiusIndex.cssResolve) => CornerRadiusIndex.variant = "styleVariants"

module CornerRadius = {
  include CornerRadiusIndex;

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
