open Margin

module MarginBlockStart = {
  include Margin

  let key = "marginBlockStart"
  @genType
  type i = { "marginBlockStart": Margin.t }
  type output = { "marginBlockStart": Margin.value }
  type cssResolve = (Margin.value) => output
}
