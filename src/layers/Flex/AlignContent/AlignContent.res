module AlignContent = {
  let key = "alignContent"

  @genType
  type t = [
    | #center
    | #start
    | #end
    | #flexStart
    | #flexEnd
    | #normal
    | #baseline
    | #firstBaseline
    | #lastBaseline
    | #spaceBetween
    | #spaceAround
    | #spaceEvenly
    | #stretch
    | #safeCenter
    | #unsafeCenter
    | #unset
  ]

  let initial = #normal;

  type value = string;

  type options = {
    "center": value,
    "start": value,
    "end": value,
    "flexStart": value,
    "flexEnd": value,
    "normal": value,
    "baseline": value,
    "firstBaseline": value,
    "lastBaseline": value,
    "spaceBetween": value,
    "spaceAround": value,
    "spaceEvenly": value,
    "stretch": value,
    "safeCenter": value,
    "unsafeCenter": value,
    "unset": value,
  };

  let options = {
    "center": "center",
    "start": "start",
    "end": "end",
    "flexStart": "flex-start",
    "flexEnd": "flex-end",
    "normal": "normal",
    "baseline": "baseline",
    "firstBaseline": "first baseline",
    "lastBaseline": "last baseline",
    "spaceBetween": "space-between",
    "spaceAround": "space-around",
    "spaceEvenly": "space-evenly",
    "stretch": "stretch",
    "safeCenter": "safe center",
    "unsafeCenter": "unsafe center",
    "unset": "unset",
  }

  type variant = {
    "center": string,
    "start": string,
    "end": string,
    "flexStart": string,
    "flexEnd": string,
    "normal": string,
    "baseline": string,
    "firstBaseline": string,
    "lastBaseline": string,
    "spaceBetween": string,
    "spaceAround": string,
    "spaceEvenly": string,
    "stretch": string,
    "safeCenter": string,
    "unsafeCenter": string,
    "unset": string,
  };

  type output = { "alignContent": value }
  type cssResolve = (value) => output
}
