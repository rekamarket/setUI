open BorderColor

@module("@vanilla-extract/css") external styleVariants: (BorderColor.options, BorderColor.cssResolve) => BorderColor.variant = "styleVariants"

module BorderColorStyle = {
  include BorderColor;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #primary => style["primary"]
    | #secondary => style["secondary"]
    | #white => style["white"]
    | #black => style["black"]
    };
  }
}
