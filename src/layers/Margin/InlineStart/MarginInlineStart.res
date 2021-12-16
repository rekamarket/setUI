open MarginReflection

module MarginInlineStart = {
  include MarginReflection

  let key = "marginInlineStart"
  @genType
  type i = { "marginInlineStart": MarginReflection.t }
  type output = { "marginInlineStart": MarginReflection.value }
  type cssResolve = (MarginReflection.value) => output
}
