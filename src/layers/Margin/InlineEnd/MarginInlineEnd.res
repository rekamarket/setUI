open Margin

module MarginInlineEnd = {
  include Margin

  type output = { "marginInlineEnd": Margin.value }
  type cssResolve = (Margin.value) => output
  // let cssResolve = (value) => {{ "marginInlineEnd": value }};

  @genType
  type i = { "marginInlineEnd": Margin.t }
}
