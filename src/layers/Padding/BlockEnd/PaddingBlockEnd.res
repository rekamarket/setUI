open PaddingReflection

module PaddingBlockEnd = {
  include PaddingReflection

  let key = "paddingBlockEnd"
  @genType
  type i = { "paddingBlockEnd": PaddingReflection.t }
  type output = { "paddingBlockEnd": PaddingReflection.value }
  type cssResolve = (PaddingReflection.value) => output
}
