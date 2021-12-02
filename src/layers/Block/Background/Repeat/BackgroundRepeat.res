module BackgroundRepeat = {
  type value = string;

  type options = {
    "repeatX": value,
    "repeatY": value,
    "repeat": value,
    "space": value,
    "round": value,
    "noRepeat": value,
    "repeat_Space": value,
    "repeat_Repeat": value,
    "round_Space": value,
    "noRepeat_Round": value,
    "inherit": value,
    "initial": value,
    "revert": value,
    "unset": value,
  };

  type t = [
    | #repeatX
    | #repeatY
    | #repeat
    | #space
    | #round
    | #noRepeat
    | #repeat_Space
    | #repeat_Repeat
    | #round_Space
    | #noRepeat_Round
    | #inherit
    | #initial
    | #revert
    | #unset
  ]

  type variant = {
    "repeatX": string,
    "repeatY": string,
    "repeat": string,
    "space": string,
    "round": string,
    "noRepeat": string,
    "repeat_Space": string,
    "repeat_Repeat": string,
    "round_Space": string,
    "noRepeat_Round": string,
    "inherit": string,
    "initial": string,
    "revert": string,
    "unset": string,
  };

  @genType
  type i = { "backgroundRepeat": t }

  type output = { "backgroundRepeat": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "backgroundRepeat": value }};

  let initial = #center;

  let options = {
    "repeatX": "repeat-x",
    "repeatY": "repeat-y",
    "repeat": "repeat",
    "space": "space",
    "round": "round",
    "noRepeat": "no-repeat",

    /* Two-value syntax: horizontal | vertical */
    "repeat_Space": "repeat space",
    "repeat_Repeat": "repeat repeat",
    "round_Space": "round space",
    "noRepeat_Round": "no-repeat round",

    /* Global values */
    "inherit": "inherit",
    "initial": "initial",
    "revert": "revert",
    "unset": "unset",
  }
}
