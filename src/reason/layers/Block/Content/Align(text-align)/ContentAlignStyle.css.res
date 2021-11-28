open ContentAlign

@module("@vanilla-extract/css") external styleVariants: (ContentAlign.options, ContentAlign.cssResolve) => ContentAlign.variant = "styleVariants"

module ContentAlignStyle = {
  include ContentAlign;

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
