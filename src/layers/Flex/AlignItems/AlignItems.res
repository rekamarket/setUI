module AlignItems = {
  type value = string;

  @genType
  type t = [
    | #normal
    | #stretch
    | #center
    | #start
    | #end
    | #flexStart
    | #flexEnd
    | #baseline
    | #firstBaseline
    | #lastBaseline
    | #safeCenter
    | #unsafeCenter
    | #unset
  ]

  type options = {
    "normal": value,
    "stretch": value,
    "center": value,
    "start": value,
    "end": value,
    "flexStart": value,
    "flexEnd": value,
    "baseline": value,
    "firstBaseline": value,
    "lastBaseline": value,
    "safeCenter": value,
    "unsafeCenter": value,
    "unset": value,
  };

  type variant = {
    "normal": string,
    "stretch": string,
    "center": string,
    "start": string,
    "end": string,
    "flexStart": string,
    "flexEnd": string,
    "baseline": string,
    "firstBaseline": string,
    "lastBaseline": string,
    "safeCenter": string,
    "unsafeCenter": string,
    "unset": string,
  };

  type i = { "alignItems": t }

  type output = { "alignItems": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "alignItems": value }};

  let initial = #stretch;

  let options = {
    "normal": "normal",
    "stretch": "stretch",
    "center": "center",
    "start": "start",
    "end": "end",
    "flexStart": "flex-start",
    "flexEnd": "flex-end",
    "baseline": "baseline",
    "firstBaseline": "first baseline",
    "lastBaseline": "last baseline",
    "safeCenter": "safe center",
    "unsafeCenter": "unsafe center",
    "unset": "unset",
  }
}
