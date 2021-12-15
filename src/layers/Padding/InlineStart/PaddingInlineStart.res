open Padding

module PaddingInlineStart = {
  include Padding

  let key = "paddingInlineStart"
  @genType
  type i = { "paddingInlineStart": Padding.t }
  type output = { "paddingInlineStart": Padding.value }
  type cssResolve = (Padding.value) => output
}
