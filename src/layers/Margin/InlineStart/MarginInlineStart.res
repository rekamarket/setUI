open Margin

module MarginInlineStart = {
  include Margin

  type output = { "marginInlineStart": Margin.value }
  type cssResolve = (Margin.value) => output
  // let cssResolve = (value) => {{ "marginInlineStart": value }};

  @genType
  type i = { "marginInlineStart": Margin.t }
}
