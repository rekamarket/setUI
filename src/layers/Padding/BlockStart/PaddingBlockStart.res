@genType
type t = PaddingReflection.t

type output = { paddingBlockStart: PaddingReflection.value }
type resolve = (PaddingReflection.value) => output

let args = PaddingReflection.args
let initial = PaddingReflection.initial
