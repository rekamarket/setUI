type value = string;

type options = {
  "none": value,
  "uppercase": value,
  "lowercase": value,
  "capitalize": value,
  "fullWidth": value,
  "fullSizeKana": value,
};

type output = {
  "textTransform": value,
}

type cssResolve = (value) => output

type variant = {
  "none": string,
  "uppercase": string,
  "lowercase": string,
  "capitalize": string,
  "fullWidth": string,
  "fullSizeKana": string,
};

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module TextTransform = {
  type t = [
    | #none
    | #uppercase
    | #lowercase
    | #capitalize
    | #fullWidth
    | #fullSizeKana
  ]

  @genType
  type i = { "textTransform": t }

  @genType
  let initial = #none;

  let style = styleVariants({
    "none": "none",
    "uppercase": "uppercase",
    "lowercase": "lowercase",
    "capitalize": "capitalize",
    "fullWidth": "full-width",
    "fullSizeKana": "full-size-kana",
  }, (value) => {
    { "textTransform": value };
  })

  @genType
  let resolve = (t) => {
    switch (t) {
    | #none => style["none"]
    | #uppercase => style["uppercase"]
    | #lowercase => style["lowercase"]
    | #capitalize => style["capitalize"]
    | #fullWidth => style["fullWidth"]
    | #fullSizeKana => style["fullSizeKana"]
    };
  }
}
