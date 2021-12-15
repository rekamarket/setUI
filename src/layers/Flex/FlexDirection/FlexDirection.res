module FlexDirection = {
  let key = "flexDirection"

  @genType
  type t = [
    | #row
    | #rowReverse
    | #column
    | #columnReverse
  ]

  let initial = #row;

  type value = string;

  type options = {
    "row": value,
    "rowReverse": value,
    "column": value,
    "columnReverse": value,
  };

  let options = {
    "row": "row",
    "rowReverse": "row-reverse",
    "column": "column",
    "columnReverse": "column-Reverse",
  }

  type variant = {
    "row": string,
    "rowReverse": string,
    "column": string,
    "columnReverse": string,
  };

  type output = { "flexDirection": value }
  type cssResolve = (value) => output
}
