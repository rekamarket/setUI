open Margin

module MarginBlockStart = {
  include Margin

  type output = { "marginBlockStart": Margin.value }
  type cssResolve = (Margin.value) => output
  // let cssResolve = (value) => {{ "marginBlockStart": value }};

  @genType
  type i = { "marginBlockStart": Margin.t }
}
