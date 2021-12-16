open ColorReflection

module ThemeColor = {
  include ColorReflection

  @genType
  type i = { "color": ColorReflection.t }

  type value = {
    "hue": string,
    "saturation": string,
    "lightness": string,
    "alpha": string,
    "textColor": string,
  };

  type options = {
    "primary": value,
    "secondary": value,
    "black": value,
    "white": value,
  };

  let options = {
    "primary": {
      "hue": "218",
      "saturation": "100%",
      "lightness": "40%",
      "alpha": "1",
      "textColor": "#fff",
    },

    "secondary": {
      "hue": "0",
      "saturation": "100%",
      "lightness": "40%",
      "alpha": "1",
      "textColor": "#fff",
    },

    "white": {
      "hue": "0",
      "saturation": "0%",
      "lightness": "100%",
      "alpha": "1",
      "textColor": "#000",
    },

    "black": {
      "hue": "0",
      "saturation": "0%",
      "lightness": "16.1%",
      "alpha": "1",
      "textColor": "#fff",
    },
  };

  type output = {
    "--h": string,
    "--s": string,
    "--l": string,
    "--a": string,
    "--color": string,
    "--text-color": string,
  };

  type cssResolve = (value) => output
}
