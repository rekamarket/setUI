module InteractiveSize = {
  let key = "interactiveSize"

  @genType
  type t = [
    | #xsmall
    | #small
    | #medium
    | #large
    | #xlarge
  ]

  let initial = #medium;

  type value = {
    "--gap-overlap": string,
    "--spacing-inline": string,
    "--spacing-block": string,
    "--font-size": string,
    "borderRadius": string,
    "borderWidth": string,
    "outlineOffset": string,
  };

  type options = {
    "xsmall": value,
    "small": value,
    "medium": value,
    "large": value,
    "xlarge": value,
  };

  let options = {
    "xsmall": {
      "--gap-overlap": "1em",
      "--spacing-inline": "2em",
      "--spacing-block": "1em",
      "--font-size": "0.75em",
      "borderRadius": "2px",
      "borderWidth": "1px",
      "outlineOffset": "-4px",
    },

    "small": {
      "--gap-overlap": "1em",
      "--spacing-inline": "2em",
      "--spacing-block": "1em",
      "--font-size": "0.85em",
      "borderRadius": "3px",
      "borderWidth": "1px",
      "outlineOffset": "-4px",
    },

    "medium": {
      "--gap-overlap": "1em",
      "--spacing-inline": "2em",
      "--spacing-block": "1em",
      "--font-size": "1em",
      "borderRadius": "4px",
      "borderWidth": "1px",
      "outlineOffset": "-4px",
    },

    "large": {
      "--gap-overlap": "1em",
      "--spacing-inline": "2em",
      "--spacing-block": "1em",
      "--font-size": "1.2em",
      "borderRadius": "6px",
      "borderWidth": "2px",
      "outlineOffset": "-4px",
    },

    "xlarge": {
      "--gap-overlap": "1em",
      "--spacing-inline": "2em",
      "--spacing-block": "1em",
      "--font-size": "1.5em",
      "borderRadius": "8px",
      "borderWidth": "2px",
      "outlineOffset": "-4px",
    },
  }

  type variant = {
    "xsmall": string,
    "small": string,
    "medium": string,
    "large": string,
    "xlarge": string,
  };

  type output = {
    "--gap-overlap": string,
    "--spacing-inline": string,
    "--spacing-block": string,
    "--font-size": string,
    "borderRadius": string,
    "borderWidth": string,
    "outlineOffset": string,
  }

  type cssResolve = (value) => output
}
