open BorderColorIndex

@module("@vanilla-extract/css") external styleVariants: (BorderColorIndex.options, BorderColorIndex.cssResolve) => BorderColorIndex.variant = "styleVariants"

module BorderColor = {
  include BorderColorIndex;

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
