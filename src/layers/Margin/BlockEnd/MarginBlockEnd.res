open MarginReflection

module MarginBlockEnd = {
  include MarginReflection

  let key = "marginBlockEnd"
  @genType
  type i = { "marginBlockEnd": MarginReflection.t }
  type output = { "marginBlockEnd": MarginReflection.value }
  type cssResolve = (MarginReflection.value) => output
}
