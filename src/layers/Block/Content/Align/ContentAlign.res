module ContentAlign = {
  type value = string;

  type options = {
    "left": value,
    "right": value,
    "center": value,
    "justify": value,
    "justifyAll": value,
    "start": value,
    "end": value,
    "matchParent": value,
    "dot": value,
    "dotCenter": value,
    "inherit": value,
    "initial": value,
    "unset": value,
  };

  type t = [
    | #left
    | #right
    | #center
    | #justify
    | #justifyAll
    | #start
    | #end
    | #matchParent
    | #dot
    | #dotCenter
    | #inherit
    | #initial
    | #unset
  ]

  type variant = {
    "left": string,
    "right": string,
    "center": string,
    "justify": string,
    "justifyAll": string,
    "start": string,
    "end": string,
    "matchParent": string,
    "dot": string,
    "dotCenter": string,
    "inherit": string,
    "initial": string,
    "unset": string,
  };

  @genType
  type i = { "contentAlign": t }

  type output = { "textAlign": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "textAlign": value }};

  let initial = #start;

  let options = {
    /* Keyword values */
    "left": "left",
    "right": "right",
    "center": "center",
    "justify": "justify",
    "justifyAll": "justify-all",
    "start": "start",
    "end": "end",
    "matchParent": "match-parent",

    /* Character-based alignment in a table column */
    "dot": `"."`,
    "dotCenter": `"." center`,

    /* Global values */
    "inherit": "inherit",
    "initial": "initial",
    "unset": "unset",
  }
}
