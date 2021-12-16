open MarginReflection

module MarginInlineEnd = {
  include MarginReflection

  let key = "marginInlineEnd"
  @genType
  type i = { "marginInlineEnd": MarginReflection.t }
  type output = { "marginInlineEnd": MarginReflection.value }
  type cssResolve = (MarginReflection.value) => output
}
