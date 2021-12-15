module MarkerPosition = {
  let key = "markerPosition"

  @genType
  type t = [
    | #inside
    | #outside
  ]

  let initial = #outside;

  type value = string;

  type options = {
    "inside": value,
    "outside": value,
  };

  let options = {
    "inside": "inside",
    "outside": "outside",
  }

  type variant = {
    "inside": string,
    "outside": string,
  };

  type output = { "listStylePosition": value }
  type cssResolve = (value) => output
}
