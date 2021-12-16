open PaddingReflection

module PaddingBlockStart = {
  include PaddingReflection

  let key = "paddingBlockStart"
  @genType
  type i = { "paddingBlockStart": PaddingReflection.t }
  type output = { "paddingBlockStart": PaddingReflection.value }
  type cssResolve = (PaddingReflection.value) => output
}
