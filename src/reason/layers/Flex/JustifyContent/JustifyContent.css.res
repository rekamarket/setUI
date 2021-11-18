type value = string;

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

type output = {
  "justifyContent": value,
}

type cssResolve = (value) => output

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

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module JustifyContent = {
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

  let initial = #flexStart;

  @genType
  let style = styleVariants({
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
  }, (value) => {
    let output = {
      "justifyContent": value,
    };
    output
  })

  @genType
  let resolve = (t) => {
    switch (t) {
    | #center => style["center"]
    | #start => style["start"]
    | #end => style["end"]
    | #flexStart => style["flexStart"]
    | #flexEnd => style["flexEnd"]
    | #left => style["left"]
    | #right => style["right"]
    | #normal => style["normal"]
    | #spaceBetween => style["spaceBetween"]
    | #spaceAround => style["spaceAround"]
    | #spaceEvenly => style["spaceEvenly"]
    | #stretch => style["stretch"]
    | #safeCenter => style["safeCenter"]
    | #unsafeCenter => style["unsafeCenter"]
    };
  }
}
