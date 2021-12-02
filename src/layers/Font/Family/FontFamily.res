module FontFamily = {
  type value = string;

  type options = {
    "primary": value,
    "monospace": value,
  };

  @genType
  type t = [
    | #primary
    | #monospace
  ]

  type variant = {
    "primary": string,
    "monospace": string,
  };

  type i = { "fontFamily": t }

  type output = { "fontFamily": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "fontFamily": value }};

  let initial = #primary;

  let options = {
    "primary": "'Montserrat', Arial, sans-serif",
    "monospace": "monospace",
  };
}
