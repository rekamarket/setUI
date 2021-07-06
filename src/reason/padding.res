module Padding = {
	type v = [#large | #medium | #small]

	type t = Padding({
		padding: v,
	}) | PaddingXY({
		paddingX: v,
		paddingY: v,
	}) | PaddingTRBL({
		paddingTop: v,
		paddingRight: v,
		paddingBottom: v,
		paddingLeft: v,
	})

	let get = (t) =>
		switch t {
		| Padding({
			padding
		}) => Js.log(
			(padding :> string)
		)
		| PaddingXY({
			paddingX,
			paddingY,
		}) => Js.log(
			(paddingX :> string) ++
			(paddingY :> string)
		)
		| PaddingTRBL({
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
		}) => Js.log(
			(paddingTop :> string) ++
			(paddingRight :> string) ++
			(paddingBottom :> string) ++
			(paddingLeft :> string)
		)}

	let q = get(PaddingXY({ paddingX: #large, paddingY: #small }));
}
