open FlexWrapIndex

@module("@vanilla-extract/css") external styleVariants: (FlexWrapIndex.options, FlexWrapIndex.cssResolve) => FlexWrapIndex.variant = "styleVariants"

module FlexWrap = {
  include FlexWrapIndex

  @genType
  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #nowrap => style["nowrap"]
    | #wrap => style["wrap"]
    | #wrapReverse => style["wrapReverse"]
    };
  }
}
