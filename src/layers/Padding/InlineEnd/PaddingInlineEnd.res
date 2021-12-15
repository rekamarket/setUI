open Padding

module PaddingInlineEnd = {
  include Padding

  let key = "paddingInlineEnd"
  @genType
  type i = { "paddingInlineEnd": Padding.t }
  type output = { "paddingInlineEnd": Padding.value }
  type cssResolve = (Padding.value) => output
}
