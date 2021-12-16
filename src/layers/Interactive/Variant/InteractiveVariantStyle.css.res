open InteractiveVariant

@module("@vanilla-extract/css") external styleVariants: (InteractiveVariant.options, InteractiveVariant.cssResolve) => InteractiveVariant.variant = "styleVariants"

module InteractiveVariantStyle = {
  include InteractiveVariant;

  let style = styleVariants(options, (value) => {
    {
      "color": value["color"],
      "borderColor": value["borderColor"],
      "backgroundColor": value["backgroundColor"],
      "borderStyle": "solid",
      "outlineStyle": "none",
      "transition": ".2s color ease-in, .2s border ease-in, .2s background ease-in",
      ":hover": value[":hover"],
      ":active": value[":active"],
      ":focus": value[":focus"],
      ":disabled": value[":disabled"],
    }
  })
}
