@genType
type t = [
  | #xs
  | #s
  | #m
  | #l
  | #xl
]

let args: array<t> = [#s, #s, #m, #l, #xl]

type r<'a> = {
  xs: 'a,
  s: 'a,
  m: 'a,
  l: 'a,
  xl: 'a,
}

type value = {
  capSize: int,
  paddingBlock: string,
  paddingInline: string,
  cornerRadius: string,
  inlineGap: string,
  iconSize: string,
}

type options = r<value>
type variant = r<string>
type output = {
  paddingBlock: string,
  paddingInline: string,
  @as("borderRadius") cornerRadius: string,
  @as("gap") inlineGap: string,
  @as("--icon-size") iconSize: string,
  @as("--cap-size") capSize: string,
  @as("--line-gap") lineGap: string,
  @as("--cap-top") capTop: string,
  @as("--cap-bottom") capBottom: string,
}
type resolve = value => output
type make = (. t) => string

let initial: t = #m

let options: options = {
  xs: {
    capSize: 10,
    paddingBlock: "7px",
    paddingInline: "8px",
    cornerRadius: "4px",
    inlineGap: "10px",
    iconSize: "12px",
  },
  s: {
    capSize: 12,
    paddingBlock: "10px",
    paddingInline: "8px",
    cornerRadius: "6px",
    inlineGap: "15px",
    iconSize: "15px",
  },
  m: {
    capSize: 14,
    paddingBlock: "12px",
    paddingInline: "12px",
    cornerRadius: "8px",
    inlineGap: "15px",
    iconSize: "18px",
  },
  l: {
    capSize: 16,
    paddingBlock: "18px",
    paddingInline: "16px",
    cornerRadius: "12px",
    inlineGap: "15px",
    iconSize: "18px",
  },
  xl: {
    capSize: 16,
    paddingBlock: "26px",
    paddingInline: "20px",
    cornerRadius: "16px",
    inlineGap: "16px",
    iconSize: "24px",
  },
}
