open FlexWrap

@module("@vanilla-extract/css") external styleVariants: (FlexWrap.options, FlexWrap.cssResolve) => FlexWrap.variant = "styleVariants"

module FlexWrapStyle = {
  include FlexWrap

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
