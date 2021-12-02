module MarkerPosition = {
  type value = string;

  @genType
  type t = [
    | #inside
    | #outside
  ]

  type options = {
    "inside": value,
    "outside": value,
  };

  type variant = {
    "inside": string,
    "outside": string,
  };

  type i = { "listStylePosition": t }

  type output = { "listStylePosition": value }
  type cssResolve = (value) => output

  let initial = #outside;

  let options = {
    "inside": "inside",
    "outside": "outside",
  }
}
