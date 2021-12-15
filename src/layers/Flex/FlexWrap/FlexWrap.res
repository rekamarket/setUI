module FlexWrap = {
  let key = "flexWrap"

  @genType
  type t = [
    | #nowrap
    | #wrap
    | #wrapReverse
  ]

  let initial = #nowrap;

  type value = string;

  type options = {
    "nowrap": value,
    "wrap": value,
    "wrapReverse": value,
  };

  let options = {
    "nowrap": "nowrap",
    "wrap": "wrap",
    "wrapReverse": "wrap-reverse",
  }

  type variant = {
    "nowrap": string,
    "wrap": string,
    "wrapReverse": string,
  };

  type output = { "flexWrap": value }
  type cssResolve = (value) => output
}
