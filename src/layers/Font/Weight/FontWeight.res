module FontWeight = {
  type value = string;

  @genType
  type t = [
    | #thin
    | #extraLight
    | #light
    | #normal
    | #medium
    | #semiBold
    | #bold
    | #extraBold
    | #heavy
    | #lighter
    | #bolder
    | #inherit
    | #initial
    | #unset
  ]

  type options = {
    "thin": value,
    "extraLight": value,
    "light": value,
    "normal": value,
    "medium": value,
    "semiBold": value,
    "bold": value,
    "extraBold": value,
    "heavy": value,
    "lighter": value,
    "bolder": value,
    "inherit": value,
    "initial": value,
    "unset": value,
  };

  type variant = {
    "thin": string,
    "extraLight": string,
    "light": string,
    "normal": string,
    "medium": string,
    "semiBold": string,
    "bold": string,
    "extraBold": string,
    "heavy": string,
    "lighter": string,
    "bolder": string,
    "inherit": string,
    "initial": string,
    "unset": string,
  };

  type i = { "fontWeight": t }

  type output = { "fontWeight": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "fontWeight": value }};

  let initial = #normal;

  let options = {
    "thin": "100",
    "extraLight": "200",
    "light": "300",
    "normal": "400",
    "medium": "500",
    "semiBold": "600",
    "bold": "700",
    "extraBold": "800",
    "heavy": "900",
    "lighter": "lighter",
    "bolder": "bolder",
    "inherit": "inherit",
    "initial": "initial",
    "unset": "unset",
  }
}
