module TextColor = {
	type v = [
		| #primary
		| #secondary
		| #black
		| #white
	]

	type t = TextColor(v)

	let get = (t) =>
		switch t {
		| TextColor(q) => Js.log(
			(q :> string)
		)}

	let q = get(TextColor(#primary));
}
