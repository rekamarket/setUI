open Padding

module PaddingInlineEnd = {
  include Padding

  type output = { "paddingInlineEnd": Padding.value }
  type cssResolve = (Padding.value) => output
  // let cssResolve = (value) => {{ "paddingInlineEnd": value }};

  @genType
  type i = { "paddingInlineEnd": Padding.t }
}
