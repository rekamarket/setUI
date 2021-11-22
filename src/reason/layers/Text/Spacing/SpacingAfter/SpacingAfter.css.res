open SpacingShared

type output = {
  "paddingInlineEnd": SpacingShared.value,
}

type cssResolve = (SpacingShared.value) => output

@module("@vanilla-extract/css") external styleVariants: (SpacingShared.options, cssResolve) => SpacingShared.variant = "styleVariants"

module SpacingAfter = {
  @genType
  let style = styleVariants(SpacingShared.options, (value) => {
    let output = {
      "paddingInlineEnd": value,
    };
    output
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
