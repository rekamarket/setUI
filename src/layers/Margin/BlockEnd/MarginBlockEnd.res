open Margin

module MarginBlockEnd = {
  include Margin

  let key = "marginBlockEnd"
  @genType
  type i = { "marginBlockEnd": Margin.t }
  type output = { "marginBlockEnd": Margin.value }
  type cssResolve = (Margin.value) => output
}
