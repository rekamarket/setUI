module BackgroundColor = {
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
  type i = { "backgroundColor": t }

  type output = {
    "--background-hue": string,
    "--background-saturation": string,
    "--background-lightness": string,
    "--background-color": string,
    "backgroundColor": string,
  }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {
  //   {
  //     "--background-hue": value["hue"],
  //     "--background-saturation": value["saturation"],
  //     "--background-lightness": value["lightness"],
  //     "--background-color": "hsl(var(--background-hue) var(--background-saturation) var(--background-lightness) / var(--background-opacity, 1))",
  //     "backgroundColor": "var(--background-color)",
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
