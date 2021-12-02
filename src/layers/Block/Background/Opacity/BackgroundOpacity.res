module BackgroundOpacity = {
  type value = string;

  type options = {
    "0": value,
    "10": value,
    "20": value,
    "30": value,
    "40": value,
    "50": value,
    "60": value,
    "70": value,
    "80": value,
    "90": value,
    "100": value,
  };

  type t = [
    | #0
    | #10
    | #20
    | #30
    | #40
    | #50
    | #60
    | #70
    | #80
    | #90
    | #100
  ]

  type variant = {
    "0": string,
    "10": string,
    "20": string,
    "30": string,
    "40": string,
    "50": string,
    "60": string,
    "70": string,
    "80": string,
    "90": string,
    "100": string,
  };

  @genType
  type i = { "backgroundOpacity": t }

  type output = { "--background-opacity": value }
  type cssResolve = (value) => output
  // let cssResolve = (value) => {{ "--background-opacity": value }};

  let initial = #100;

  let options = {
    "0": "0",
    "10": ".1",
    "20": ".2",
    "30": ".3",
    "40": ".4",
    "50": ".5",
    "60": ".6",
    "70": ".7",
    "80": ".8",
    "90": ".9",
    "100": "1",
  }
}
