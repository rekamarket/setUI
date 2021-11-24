open FontFamilyIndex

@module("@vanilla-extract/css") external styleVariants: (FontFamilyIndex.options, FontFamilyIndex.cssResolve) => FontFamilyIndex.variant = "styleVariants"

module FontFamily = {
  include FontFamilyIndex

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #primary => style["primary"]
    | #monospace => style["monospace"]
    };
  }
}
