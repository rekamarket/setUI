type value = int;

type options = {
  "small": value,
  "medium": value,
  "large": value,
};

type output = {
  "color": value,
}

type cssResolve = (value) => output

type variant = {
  "small": string,
  "medium": string,
  "large": string,
};

@module("@vanilla-extract/css") external styleVariants: (options, cssResolve) => variant = "styleVariants"

module Color = {
  @genType
  type t = [
    | #small
    | #medium
    | #large
  ]

  let initial = #small;

  let style = styleVariants({
    "small": 1,
    "medium": 2,
    "large": 3,
  }, (value) => {
    let output = {
      "color": value,
    };
    output
  })

  @genType
  let resolve = (t) => {
    switch (t) {
    | #small => style["small"]
    | #medium => style["medium"]
    | #large => style["large"]
    };
  }
}
