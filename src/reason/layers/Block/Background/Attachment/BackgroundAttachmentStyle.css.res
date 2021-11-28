open BackgroundAttachment

@module("@vanilla-extract/css") external styleVariants: (BackgroundAttachment.options, BackgroundAttachment.cssResolve) => BackgroundAttachment.variant = "styleVariants"

module BackgroundAttachmentStyle = {
  include BackgroundAttachment;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #scroll => style["scroll"]
    | #fixed => style["fixed"]
    | #local => style["local"]
    | #inherit => style["inherit"]
    | #initial => style["initial"]
    | #revert => style["revert"]
    | #unset => style["unset"]
    };
  }
}
