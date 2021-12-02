module BorderColor = {
  type value = {
    "hue": string,
    "saturation": string,
    "lightness": string,
  };

  type options = {
    "primary": value,
    "secondary": value,
    "white": value,
    "black": value,
  };

  type t = [
    | #primary
    | #secondary
    | #white
    | #black
  ]

  type variant = {
    "primary": string,
    "secondary": string,
    "white": string,
    "black": string,
  };

  @genType
  type i = { "borderColor": t }

  type output = {
    "--border-hue": string,
    "--border-saturation": string,
    "--border-lightness": string,
    "--border-color": string,
    "borderColor": string,
  }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {
  //   {
  //     "--border-hue": value["hue"],
  //     "--border-saturation": value["saturation"],
  //     "--border-lightness": value["lightness"],
  //     "--border-color": "hsl(var(--border-hue) var(--border-saturation) var(--border-lightness) / var(--border-opacity, 1))",
  //     "borderColor": "var(--border-color)",
  //   }
  // };

  let initial = #primary;

  let options = {
    "primary": {
      "hue": "206",
      "saturation": "100%",
      "lightness": "41.6%",
    },
    "secondary": {
      "hue": "207.7",
      "saturation": "68.9%",
      "lightness": "50.8%",
    },
    "white": {
      "hue": "0",
      "saturation": "0%",
      "lightness": "100%",
    },
    "black": {
      "hue": "0",
      "saturation": "0%",
      "lightness": "0%",
    },
  }
}
