module JustifyContent = {
  type value = string;

  @genType
  type t = [
    | #center
    | #start
    | #end
    | #flexStart
    | #flexEnd
    | #left
    | #right
    | #normal
    | #spaceBetween
    | #spaceAround
    | #spaceEvenly
    | #stretch
    | #safeCenter
    | #unsafeCenter
  ]

  type options = {
    "center": value,
    "start": value,
    "end": value,
    "flexStart": value,
    "flexEnd": value,
    "left": value,
    "right": value,
    "normal": value,
    "spaceBetween": value,
    "spaceAround": value,
    "spaceEvenly": value,
    "stretch": value,
    "safeCenter": value,
    "unsafeCenter": value,
  };

  type variant = {
    "center": string,
    "start": string,
    "end": string,
    "flexStart": string,
    "flexEnd": string,
    "left": string,
    "right": string,
    "normal": string,
    "spaceBetween": string,
    "spaceAround": string,
    "spaceEvenly": string,
    "stretch": string,
    "safeCenter": string,
    "unsafeCenter": string,
  };

  type i = { "justifyContent": t }

  type output = { "justifyContent": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "justifyContent": value }};

  let initial = #flexStart;

  let options = {
    "center": "center",
    "start": "start",
    "end": "end",
    "flexStart": "flex-start",
    "flexEnd": "flex-end",
    "left": "left",
    "right": "right",
    "normal": "normal",
    "spaceBetween": "space-between",
    "spaceAround": "space-around",
    "spaceEvenly": "space-evenly",
    "stretch": "stretch",
    "safeCenter": "safe center",
    "unsafeCenter": "unsafe center",
  }
}
