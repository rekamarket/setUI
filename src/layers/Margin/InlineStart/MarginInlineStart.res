open Margin

module MarginInlineStart = {
  include Margin

  let key = "marginInlineStart"
  @genType
  type i = { "marginInlineStart": Margin.t }
  type output = { "marginInlineStart": Margin.value }
  type cssResolve = (Margin.value) => output
}
