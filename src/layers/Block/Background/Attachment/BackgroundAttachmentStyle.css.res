open BackgroundAttachment

@module("@vanilla-extract/css") external styleVariants: (BackgroundAttachment.options, BackgroundAttachment.cssResolve) => BackgroundAttachment.variant = "styleVariants"

module BackgroundAttachmentStyle = {
  include BackgroundAttachment;

  let style = styleVariants(options, (value) => {{ "backgroundAttachment": value }})
}
