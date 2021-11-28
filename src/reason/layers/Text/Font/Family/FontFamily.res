module FontFamily = {
  type value = string;

  type options = {
    "primary": value,
    "monospace": value,
  };

  type t = [
    | #primary
    | #monospace
  ]

  type variant = {
    "primary": string,
    "monospace": string,
  };

  @genType
  type i = { "fontFamily": t }

  type output = { "fontFamily": value }
  type cssResolve = (value) => output
  let cssResolve = (value) => {{ "fontFamily": value }};

  @genType
  let initial = #primary;

  @genType
  let options = {
    "primary": "'Montserrat', Arial, sans-serif",
    "monospace": "monospace",
  };
}
