open Padding

module PaddingBlockEnd = {
  include Padding

  type output = { "paddingBlockEnd": Padding.value }
  type cssResolve = (Padding.value) => output
  // let cssResolve = (value) => {{ "paddingBlockEnd": value }};

  @genType
  type i = { "paddingBlockEnd": Padding.t }
}
