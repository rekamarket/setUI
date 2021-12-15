open Margin

module MarginInlineEnd = {
  include Margin

  let key = "marginInlineEnd"
  @genType
  type i = { "marginInlineEnd": Margin.t }
  type output = { "marginInlineEnd": Margin.value }
  type cssResolve = (Margin.value) => output
}
