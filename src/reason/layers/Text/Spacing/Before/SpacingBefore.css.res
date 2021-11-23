open SpacingShared

type output = {
  "paddingInlineStart": SpacingShared.value,
}

type cssResolve = (SpacingShared.value) => output

@module("@vanilla-extract/css") external styleVariants: (SpacingShared.options, cssResolve) => SpacingShared.variant = "styleVariants"

module SpacingBefore = {
  @genType
  type i = { "spacingBefore": SpacingShared.t }

  let style = styleVariants(SpacingShared.options, (value) => {
    { "paddingInlineStart": value };
  })

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
