open BackgroundOriginIndex

@module("@vanilla-extract/css") external styleVariants: (BackgroundOriginIndex.options, BackgroundOriginIndex.cssResolve) => BackgroundOriginIndex.variant = "styleVariants"

module BackgroundOrigin = {
  include BackgroundOriginIndex;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #borderBox => style["borderBox"]
    | #paddingBox => style["paddingBox"]
    | #contentBox => style["contentBox"]
    | #inherit => style["inherit"]
    | #initial => style["initial"]
    | #revert => style["revert"]
    | #unset => style["unset"]
    };
  }
}
