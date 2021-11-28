open ContentAlignIndex

@module("@vanilla-extract/css") external styleVariants: (ContentAlignIndex.options, ContentAlignIndex.cssResolve) => ContentAlignIndex.variant = "styleVariants"

module ContentAlign = {
  include ContentAlignIndex;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #left => style["left"]
    | #right => style["right"]
    | #center => style["center"]
    | #justify => style["justify"]
    | #justifyAll => style["justifyAll"]
    | #start => style["start"]
    | #end => style["end"]
    | #matchParent => style["matchParent"]
    | #dot => style["dot"]
    | #dotCenter => style["dotCenter"]
    | #inherit => style["inherit"]
    | #initial => style["initial"]
    | #unset => style["unset"]
    };
  }
}
