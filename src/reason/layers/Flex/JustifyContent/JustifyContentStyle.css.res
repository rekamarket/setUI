open JustifyContent

@module("@vanilla-extract/css") external styleVariants: (JustifyContent.options, JustifyContent.cssResolve) => JustifyContent.variant = "styleVariants"

module JustifyContentStyle = {
  include JustifyContent

  @genType
  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #center => style["center"]
    | #start => style["start"]
    | #end => style["end"]
    | #flexStart => style["flexStart"]
    | #flexEnd => style["flexEnd"]
    | #left => style["left"]
    | #right => style["right"]
    | #normal => style["normal"]
    | #spaceBetween => style["spaceBetween"]
    | #spaceAround => style["spaceAround"]
    | #spaceEvenly => style["spaceEvenly"]
    | #stretch => style["stretch"]
    | #safeCenter => style["safeCenter"]
    | #unsafeCenter => style["unsafeCenter"]
    };
  }
}
