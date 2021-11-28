open FlexDirectionIndex

@module("@vanilla-extract/css") external styleVariants: (FlexDirectionIndex.options, FlexDirectionIndex.cssResolve) => FlexDirectionIndex.variant = "styleVariants"

module FlexDirection = {
  include FlexDirectionIndex

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
