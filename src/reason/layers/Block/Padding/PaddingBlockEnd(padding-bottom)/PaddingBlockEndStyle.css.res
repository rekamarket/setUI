open PaddingBlockEnd

@module("@vanilla-extract/css") external styleVariants: (PaddingBlockEnd.options, PaddingBlockEnd.cssResolve) => PaddingBlockEnd.variant = "styleVariants"

module PaddingBlockEndStyle = {
  include PaddingBlockEnd

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
