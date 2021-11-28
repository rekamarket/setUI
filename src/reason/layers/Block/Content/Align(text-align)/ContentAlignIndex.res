module ContentAlignIndex = {
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

  @genType
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
  let cssResolve = (value) => {{ "textAlign": value }};

  @genType
  let initial = #start;

  @genType
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
