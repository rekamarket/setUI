open InteractiveSize

@module("@vanilla-extract/css") external styleVariants: (InteractiveSize.options, InteractiveSize.cssResolve) => InteractiveSize.variant = "styleVariants"

module InteractiveSizeStyle = {
  include InteractiveSize;

  let style = styleVariants(options, (value) => {
    {
      "--gap-overlap": value["--gap-overlap"],
      "--spacing-inline": value["--spacing-inline"],
      "--spacing-block": value["--spacing-block"],
      "--font-size": value["--font-size"],
      "borderRadius": value["borderRadius"],
      "borderWidth": value["borderWidth"],
      "outlineOffset": value["outlineOffset"],
    }
  })
}
