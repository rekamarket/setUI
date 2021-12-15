open Padding

module PaddingBlockStart = {
  include Padding

  let key = "paddingBlockStart"
  @genType
  type i = { "paddingBlockStart": Padding.t }
  type output = { "paddingBlockStart": Padding.value }
  type cssResolve = (Padding.value) => output
}
