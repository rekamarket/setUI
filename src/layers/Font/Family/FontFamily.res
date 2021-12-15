module FontFamily = {
  let key = "fontFamily"

  @genType
  type t = [
    | #primary
    | #monospace
  ]

  let initial = #primary;

  type value = string;

  type options = {
    "primary": value,
    "monospace": value,
  };

  let options = {
    "primary": "'Montserrat', Arial, sans-serif",
    "monospace": "monospace",
  };

  type variant = {
    "primary": string,
    "monospace": string,
  };

  type output = { "fontFamily": value }
  type cssResolve = (value) => output
}
