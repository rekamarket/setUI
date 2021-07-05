module Example = {
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
		| Padding({ padding }) => Js.log(padding)
		| PaddingXY({ paddingX, paddingY }) => Js.log2(paddingX, paddingY)
		| PaddingTRBL({ paddingTop, paddingRight, paddingBottom, paddingLeft }) => Js.log4(paddingTop, paddingRight, paddingBottom, paddingLeft)
		}

	let q = get(PaddingXY({ paddingX: #large, paddingY: #small }));
}
