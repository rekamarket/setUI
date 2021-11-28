open Color

@module("@vanilla-extract/css") external styleVariants: (Color.options, Color.cssResolve) => Color.variant = "styleVariants"

module ColorStyle = {
  include Color;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #primary => style["primary"]
    | #secondary => style["secondary"]
    | #black => style["black"]
    | #white => style["white"]
    };
  }
}
