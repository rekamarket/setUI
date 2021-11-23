open ColorIndex

@module("@vanilla-extract/css") external styleVariants: (ColorIndex.options, ColorIndex.cssResolve) => ColorIndex.variant = "styleVariants"

module Color = {
  include ColorIndex;

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
