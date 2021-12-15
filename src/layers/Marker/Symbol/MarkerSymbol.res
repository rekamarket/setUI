module MarkerSymbol = {
  let key = "markerSymbol"

  @genType
  type t = [
    | #none
    | #bullet
    | #circle
  ]

  let initial = #bullet;

  type value = string;

  type options = {
    "none": value,
    "bullet": value,
    "circle": value,
  };

  let options = {
    "none": "none",
    "bullet": `"•"`, // U+2022 - Bullet
    "circle": `"●"`, // U+25CF - Black Circle
  }

  type variant = {
    "none": string,
    "bullet": string,
    "circle": string,
  };

  type output = {
    "--marker-symbol": value,
    "listStyleType": value
  }

  type cssResolve = (value) => output
}
