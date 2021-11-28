open PaddingBlockStart

@module("@vanilla-extract/css") external styleVariants: (PaddingBlockStart.options, PaddingBlockStart.cssResolve) => PaddingBlockStart.variant = "styleVariants"

module PaddingBlockStartStyle = {
  include PaddingBlockStart

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
