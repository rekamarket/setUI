open FlexDirection

@module("@vanilla-extract/css") external styleVariants: (FlexDirection.options, FlexDirection.cssResolve) => FlexDirection.variant = "styleVariants"

module FlexDirectionStyle = {
  include FlexDirection

  @genType
  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #row => style["row"]
    | #rowReverse => style["rowReverse"]
    | #column => style["column"]
    | #columnReverse => style["columnReverse"]
    };
  }
}
