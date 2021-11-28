open BackgroundClip

@module("@vanilla-extract/css") external styleVariants: (BackgroundClip.options, BackgroundClip.cssResolve) => BackgroundClip.variant = "styleVariants"

module BackgroundClipStyle = {
  include BackgroundClip;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #borderBox => style["borderBox"]
    | #paddingBox => style["paddingBox"]
    | #contentBox => style["contentBox"]
    | #text => style["text"]
    | #inherit => style["inherit"]
    | #initial => style["initial"]
    | #revert => style["revert"]
    | #unset => style["unset"]
    };
  }
}