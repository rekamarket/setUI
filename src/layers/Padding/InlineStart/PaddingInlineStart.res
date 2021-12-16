open PaddingReflection

module PaddingInlineStart = {
  include PaddingReflection

  let key = "paddingInlineStart"
  @genType
  type i = { "paddingInlineStart": PaddingReflection.t }
  type output = { "paddingInlineStart": PaddingReflection.value }
  type cssResolve = (PaddingReflection.value) => output
}
