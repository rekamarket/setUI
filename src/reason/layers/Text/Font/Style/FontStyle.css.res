open FontStyleIndex

@module("@vanilla-extract/css") external styleVariants: (FontStyleIndex.options, FontStyleIndex.cssResolve) => FontStyleIndex.variant = "styleVariants"

module FontStyle = {
  include FontStyleIndex

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #normal => style["normal"]
    | #italic => style["italic"]
    | #oblique => style["oblique"]
    | #inherit => style["inherit"]
    | #initial => style["initial"]
    | #unset => style["unset"]
    };
  }
}
