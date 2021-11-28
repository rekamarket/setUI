open FontStyle

@module("@vanilla-extract/css") external styleVariants: (FontStyle.options, FontStyle.cssResolve) => FontStyle.variant = "styleVariants"

module FontStyleStyle = {
  include FontStyle

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
