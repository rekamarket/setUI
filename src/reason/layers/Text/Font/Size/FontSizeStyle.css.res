open FontSize

@module("@vanilla-extract/css") external styleVariants: (FontSize.options, FontSize.cssResolve) => FontSize.variant = "styleVariants"

module FontSizeStyle = {
  include FontSize

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
      | #smaller => style["smaller"]
      | #larger => style["larger"]
    };
  }
}
