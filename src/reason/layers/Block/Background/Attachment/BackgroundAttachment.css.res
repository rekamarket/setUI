open BackgroundAttachmentIndex

@module("@vanilla-extract/css") external styleVariants: (BackgroundAttachmentIndex.options, BackgroundAttachmentIndex.cssResolve) => BackgroundAttachmentIndex.variant = "styleVariants"

module BackgroundAttachment = {
  include BackgroundAttachmentIndex;

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
