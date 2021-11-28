open MarginInlineStart

@module("@vanilla-extract/css") external styleVariants: (MarginInlineStart.options, MarginInlineStart.cssResolve) => MarginInlineStart.variant = "styleVariants"

module MarginInlineStartStyle = {
  include MarginInlineStart

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
