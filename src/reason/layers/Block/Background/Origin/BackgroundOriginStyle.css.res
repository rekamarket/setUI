open BackgroundOrigin

@module("@vanilla-extract/css") external styleVariants: (BackgroundOrigin.options, BackgroundOrigin.cssResolve) => BackgroundOrigin.variant = "styleVariants"

module BackgroundOriginStyle = {
  include BackgroundOrigin;

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
