module FlexWrap = {
  type value = string;

  @genType
  type t = [
    | #nowrap
    | #wrap
    | #wrapReverse
  ]

  type options = {
    "nowrap": value,
    "wrap": value,
    "wrapReverse": value,
  };

  type variant = {
    "nowrap": string,
    "wrap": string,
    "wrapReverse": string,
  };

  type i = { "flexWrap": t }

  type output = { "flexWrap": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "flexWrap": value }};

  let initial = #nowrap;

  let options = {
    "nowrap": "nowrap",
    "wrap": "wrap",
    "wrapReverse": "wrap-reverse",
  }
}
