open PaddingReflection

module PaddingInlineEnd = {
  include PaddingReflection

  let key = "paddingInlineEnd"
  @genType
  type i = { "paddingInlineEnd": PaddingReflection.t }
  type output = { "paddingInlineEnd": PaddingReflection.value }
  type cssResolve = (PaddingReflection.value) => output
}
