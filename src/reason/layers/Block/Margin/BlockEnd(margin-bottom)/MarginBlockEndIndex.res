open Margin

module MarginBlockEndIndex = {
  include Margin

  type output = { "marginBlockEnd": Margin.value }
  type cssResolve = (Margin.value) => output
  let cssResolve = (value) => {{ "marginBlockEnd": value }};

  @genType
  type i = { "marginBlockEnd": Margin.t }
}
