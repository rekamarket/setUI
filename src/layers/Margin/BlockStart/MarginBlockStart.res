@genType
type t = MarginReflection.t

type output = { marginBlockStart: MarginReflection.value }
type resolve = (MarginReflection.value) => output

let args = MarginReflection.args
let initial = MarginReflection.initial
