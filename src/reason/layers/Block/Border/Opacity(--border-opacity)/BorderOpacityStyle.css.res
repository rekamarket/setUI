open BorderOpacity

@module("@vanilla-extract/css") external styleVariants: (BorderOpacity.options, BorderOpacity.cssResolve) => BorderOpacity.variant = "styleVariants"

module BorderOpacityStyle = {
  include BorderOpacity;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #0 => style["0"]
    | #10 => style["10"]
    | #20 => style["20"]
    | #30 => style["30"]
    | #40 => style["40"]
    | #50 => style["50"]
    | #60 => style["60"]
    | #70 => style["70"]
    | #80 => style["80"]
    | #90 => style["90"]
    | #100 => style["100"]
    };
  }
}