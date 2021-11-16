type value = string;

type options = {
  "primary": value,
  "monospace": value,
};

type output = {
  "fontFamily": value,
}

type cssResolve = (value) => output

type variant = {
  "primary": string,
  "monospace": string,
};

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module FontFamily = {
  @genType
  type t = [
    | #primary
    | #monospace
  ]

  let initial = #primary;

  let style = styleVariants({
    "primary": "'Montserrat', Arial, sans-serif",
    "monospace": "monospace",
  }, (value) => {
    let output = {
      "fontFamily": value,
    };
    output
  })

  @genType
  let resolve = (t) => {
    switch (t) {
    | #primary => style["primary"]
    | #monospace => style["monospace"]
    };
  }
}
