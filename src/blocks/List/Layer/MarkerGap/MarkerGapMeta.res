let name = "markerGap"
let resolvedName = "--marker-gap"
let description = `The space between content and the marker`->Some
let args = MarkerGap.args->Belt.Array.map(e => (e :> string))
let mdn = None
