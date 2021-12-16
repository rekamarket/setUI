open MarginReflection

module MarginBlockStart = {
  include MarginReflection

  let key = "marginBlockStart"
  @genType
  type i = { "marginBlockStart": MarginReflection.t }
  type output = { "marginBlockStart": MarginReflection.value }
  type cssResolve = (MarginReflection.value) => output
}
