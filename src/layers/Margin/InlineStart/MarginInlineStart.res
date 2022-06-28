@genType
type t = MarginReflection.t

type output = { marginInlineStart: MarginReflection.value }
type resolve = (MarginReflection.value) => output

let args = MarginReflection.args
let initial = MarginReflection.initial
