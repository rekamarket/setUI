open ButtonLinkVariant

@module("@vanilla-extract/css") external styleVariants: (ButtonLinkVariant.options, ButtonLinkVariant.cssResolve) => ButtonLinkVariant.variant = "styleVariants"

module ButtonLinkVariantStyle = {
  include ButtonLinkVariant;

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
