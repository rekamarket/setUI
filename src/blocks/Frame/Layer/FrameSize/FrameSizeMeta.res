let name = "max-inline-size"
let description =
  `The max-inline-size CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the max-width or the max-height property, depending on the value of writing-mode. If the writing mode is vertically oriented, the value of max-inline-size relates to the maximal height of the element; otherwise, it relates to the maximal width of the element. A related property is max-block-size, which defines the other dimension of the element.`->Some
let args = FrameSize.args->Belt.Array.map(e => (e :> string))
let mdn = `https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size`->Some
