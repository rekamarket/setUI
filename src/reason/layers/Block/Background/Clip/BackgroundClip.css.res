open BackgroundClipIndex

@module("@vanilla-extract/css") external styleVariants: (BackgroundClipIndex.options, BackgroundClipIndex.cssResolve) => BackgroundClipIndex.variant = "styleVariants"

module BackgroundClip = {
  include BackgroundClipIndex;

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
