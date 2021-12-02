open Padding

module PaddingInlineStart = {
  include Padding

  type output = { "paddingInlineStart": Padding.value }
  type cssResolve = (Padding.value) => output
  // let cssResolve = (value) => {{ "paddingInlineStart": value }};

  @genType
  type i = { "paddingInlineStart": Padding.t }
}
