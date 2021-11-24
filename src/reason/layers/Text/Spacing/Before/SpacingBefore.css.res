open SpacingBeforeIndex

@module("@vanilla-extract/css") external styleVariants: (SpacingBeforeIndex.options, SpacingBeforeIndex.cssResolve) => SpacingBeforeIndex.variant = "styleVariants"

module SpacingBefore = {
  include SpacingBeforeIndex

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
