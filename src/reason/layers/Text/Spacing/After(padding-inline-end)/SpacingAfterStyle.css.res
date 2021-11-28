open SpacingAfter

@module("@vanilla-extract/css") external styleVariants: (SpacingAfter.options, SpacingAfter.cssResolve) => SpacingAfter.variant = "styleVariants"

module SpacingAfterStyle = {
  include SpacingAfter

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
      | #none => style["none"]
      | #xxxsmall => style["xxxsmall"]
      | #xxsmall => style["xxsmall"]
      | #xsmall => style["xsmall"]
      | #small => style["small"]
      | #medium => style["medium"]
      | #large => style["large"]
      | #xlarge => style["xlarge"]
      | #xxlarge => style["xxlarge"]
      | #xxxlarge => style["xxxlarge"]
    };
  }
}
