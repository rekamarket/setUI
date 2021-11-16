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
  "normal": value,
};

type output = {
  "alignContent": value,
}

type cssResolve = (value) => output

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
  "normal": string,
};

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module AlignContent = {
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
    | #normal
  ]

  let initial = #normal;

  let style = styleVariants({
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
    "normal": "normal",
  }, (value) => {
    let output = {
      "alignContent": value,
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
    | #normal => style["normal"]
    | #baseline => style["baseline"]
    | #firstBaseline => style["firstBaseline"]
    | #lastBaseline => style["lastBaseline"]
    | #spaceBetween => style["spaceBetween"]
    | #spaceAround => style["spaceAround"]
    | #spaceEvenly => style["spaceEvenly"]
    | #stretch => style["stretch"]
    | #safeCenter => style["safeCenter"]
    | #unsafeCenter => style["unsafeCenter"]
    | #unset => style["unset"]
    };
  }
}
