open AlignItemsIndex

@module("@vanilla-extract/css") external styleVariants: (AlignItemsIndex.options, AlignItemsIndex.cssResolve) => AlignItemsIndex.variant = "styleVariants"

module AlignItems = {
  include AlignItemsIndex

  @genType
  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #normal => style["normal"]
    | #stretch => style["stretch"]
    | #center => style["center"]
    | #start => style["start"]
    | #end => style["end"]
    | #flexStart => style["flexStart"]
    | #flexEnd => style["flexEnd"]
    | #baseline => style["baseline"]
    | #firstBaseline => style["firstBaseline"]
    | #lastBaseline => style["lastBaseline"]
    | #safeCenter => style["safeCenter"]
    | #unsafeCenter => style["unsafeCenter"]
    | #unset => style["unset"]
    };
  }
}
