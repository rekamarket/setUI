open Padding

module PaddingBlockStart = {
  include Padding

  type output = { "paddingBlockStart": Padding.value }
  type cssResolve = (Padding.value) => output
  // let cssResolve = (value) => {{ "paddingBlockStart": value }};

  @genType
  type i = { "paddingBlockStart": Padding.t }
}
