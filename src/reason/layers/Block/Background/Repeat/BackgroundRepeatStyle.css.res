open BackgroundRepeat

@module("@vanilla-extract/css") external styleVariants: (BackgroundRepeat.options, BackgroundRepeat.cssResolve) => BackgroundRepeat.variant = "styleVariants"

module BackgroundRepeatStyle = {
  include BackgroundRepeat;

  let style = styleVariants(options, cssResolve)

  @genType
  let resolve = (t) => {
    switch (t) {
    | #repeatX => style["repeatX"]
    | #repeatY => style["repeatY"]
    | #repeat => style["repeat"]
    | #space => style["space"]
    | #round => style["round"]
    | #noRepeat => style["noRepeat"]
    | #repeat_Space => style["repeat_Space"]
    | #repeat_Repeat => style["repeat_Repeat"]
    | #round_Space => style["round_Space"]
    | #noRepeat_Round => style["noRepeat_Round"]
    | #inherit => style["inherit"]
    | #initial => style["initial"]
    | #revert => style["revert"]
    | #unset => style["unset"]
    };
  }
}