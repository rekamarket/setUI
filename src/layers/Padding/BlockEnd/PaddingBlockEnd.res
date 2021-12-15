open Padding

module PaddingBlockEnd = {
  include Padding

  let key = "paddingBlockEnd"
  @genType
  type i = { "paddingBlockEnd": Padding.t }
  type output = { "paddingBlockEnd": Padding.value }
  type cssResolve = (Padding.value) => output
}
