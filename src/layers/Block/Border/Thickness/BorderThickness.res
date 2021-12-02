module BorderThickness = {
  type value = string;

  type options = {
    "none": value,
    "thin": value,
    "light": value,
    "medium": value,
    "bold": value,
  };

  type t = [
    | #none
    | #thin
    | #light
    | #medium
    | #bold
  ]

  type variant = {
    "none": string,
    "thin": string,
    "light": string,
    "medium": string,
    "bold": string,
  };

  @genType
  type i = { "borderThickness": t }

  type output = { "borderWidth": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "borderWidth": value }};

  let initial = #none;

  let options = {
    "none": "0px",
    "thin": "1px",
    "light": "2px",
    "medium": "3px",
    "bold": "4px",
  }
}
