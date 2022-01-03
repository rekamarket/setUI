module LineClamp = {
  let key = "lineClamp"

  @genType
  type t = [
    | #none
    | #1
    | #2
    | #3
    | #4
    | #5
    | #6
  ]

  let initial = #none;

  type value = {
    "overflow": string,
    "display": string,
    "-webkit-line-clamp": string,
    "-webkit-box-orient": string,
  }

  type options = {
    "none": value,
    "1": value,
    "2": value,
    "3": value,
    "4": value,
    "5": value,
    "6": value,
  };

  let options = {
    "none": {
      "overflow": "initial",
      "display": "initial",
      "-webkit-line-clamp": "initial",
      "-webkit-box-orient": "initial",  
    },
    "1": {
      "overflow": "hidden",
      "display": "-webkit-box",
      "-webkit-line-clamp": "1",
      "-webkit-box-orient": "vertical",  
    },
    "2": {
      "overflow": "hidden",
      "display": "-webkit-box",
      "-webkit-line-clamp": "2",
      "-webkit-box-orient": "vertical",  
    },
    "3": {
      "overflow": "hidden",
      "display": "-webkit-box",
      "-webkit-line-clamp": "3",
      "-webkit-box-orient": "vertical",  
    },
    "4": {
      "overflow": "hidden",
      "display": "-webkit-box",
      "-webkit-line-clamp": "4",
      "-webkit-box-orient": "vertical",  
    },
    "5": {
      "overflow": "hidden",
      "display": "-webkit-box",
      "-webkit-line-clamp": "5",
      "-webkit-box-orient": "vertical",  
    },
    "6": {
      "overflow": "hidden",
      "display": "-webkit-box",
      "-webkit-line-clamp": "6",
      "-webkit-box-orient": "vertical",  
    },
  }

  type variant = {
    "none": string,
    "1": string,
    "2": string,
    "3": string,
    "4": string,
    "5": string,
    "6": string,
  };

  type output = {
    "overflow": string,
    "display": string,
    "-webkit-line-clamp": string,
    "-webkit-box-orient": string, 
  }

  type cssResolve = (value) => output
}
