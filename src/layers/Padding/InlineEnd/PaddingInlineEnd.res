@genType
type t = PaddingReflection.t

type output = { paddingInlineEnd: PaddingReflection.value }
type resolve = (PaddingReflection.value) => output

let args = PaddingReflection.args
let initial = PaddingReflection.initial
