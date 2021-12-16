module InteractiveShape = {
  let key = "interactiveShape"

  @genType
  type t = [
    | #rect
    | #square
    | #fit
  ]

  let initial = #rect;

  type value = {
    "height": string,
    "minHeight": string,
    "maxHeight": string,
    "width": string,
    "minWidth": string,
    "maxWidth": string,
  };

  type options = {
    "rect": value,
    "square": value,
    "fit": value,
  };

  let options = {
    "rect": {
      "height": "var(--size)",
      "minHeight": "initial",
      "maxHeight": "initial",
      "width": "initial",
      "minWidth": "initial",
      "maxWidth": "initial",
    },

    "square": {
      "height": "var(--size)",
      "minHeight": "var(--size)",
      "maxHeight": "var(--size)",
      "width": "var(--size)",
      "minWidth": "var(--size)",
      "maxWidth": "var(--size)",
    },

    "fit": {
      "height": "var(--size)",
      "minHeight": "initial",
      "maxHeight": "initial",
      "width": "fit-content",
      "minWidth": "fit-content",
      "maxWidth": "fit-content",
    },
  }

  type variant = {
    "rect": string,
    "square": string,
    "fit": string,
  };

  type output = {
    "height": string,
    "minHeight": string,
    "maxHeight": string,
    "width": string,
    "minWidth": string,
    "maxWidth": string,
  }

  type cssResolve = (value) => output
}
