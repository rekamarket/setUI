module MarkerSymbol = {
  type value = string;

  @genType
  type t = [
    | #none
    | #bullet
    | #circle
  ]

  type options = {
    "none": value,
    "bullet": value,
    "circle": value,
  };

  type variant = {
    "none": string,
    "bullet": string,
    "circle": string,
  };

  type i = { "markerSymbol": t }

  type output = {
    "--marker-symbol": value,
    "listStyleType": value
  }

  type cssResolve = (value) => output

  let initial = #bullet;

  let options = {
    "none": "none",
    "bullet": `"•"`, // U+2022 - Bullet
    "circle": `"●"`, // U+25CF - Black Circle
  }
}
