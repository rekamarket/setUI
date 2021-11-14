type value = string;

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

type output = {
  "alignItems": value,
}

type cssResolve = (value) => output

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

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module AlignContent = {
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

  let initial = #stretch;

  let style = styleVariants({
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
  }, (value) => {
    let output = {
      "alignItems": value,
    };
    output
  })

  @genType
  let resolve = (t) => {
    switch (t) {
    | #normal => style["normal"]
    | #stretch => style["stretch"]
    | #center => style["center"]
    | #start => style["start"]
    | #end => style["end"]
    | #flexStart => style["flexStart"]
    | #flexEnd => style["flexEnd"]
    | #baseline => style["baseline"]
    | #firstBaseline => style["firstBaseline"]
    | #lastBaseline => style["lastBaseline"]
    | #safeCenter => style["safeCenter"]
    | #unsafeCenter => style["unsafeCenter"]
    | #unset => style["unset"]
    };
  }
}
