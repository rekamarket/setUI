module FlexDirection = {
  type value = string;

  @genType
  type t = [
    | #row
    | #rowReverse
    | #column
    | #columnReverse
  ]

  type options = {
    "row": value,
    "rowReverse": value,
    "column": value,
    "columnReverse": value,
  };

  type variant = {
    "row": string,
    "rowReverse": string,
    "column": string,
    "columnReverse": string,
  };

  type i = { "flexDirection": t }

  type output = { "flexDirection": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "flexDirection": value }};

  let initial = #row;

  let options = {
    "row": "row",
    "rowReverse": "row-reverse",
    "column": "column",
    "columnReverse": "column-Reverse",
  }
}
