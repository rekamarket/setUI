@genType
type t = [
  | #blue
  | #gray
]

let args: array<t> = [#blue, #gray]

type r<'a> = {
  blue: 'a,
  gray: 'a,
}

type state = {accentColor: string}

type value = {
  textColor: string,
  accentColor: string,
  hover: state,
  active: state,
  disabled: state,
}

type options = r<value>
type variant = r<string>

type output = {
  @as("--text-color") textColor: string,
  @as("--accent-color") accentColor: string,
  transition: string,
  @as(":hover") hover: state,
  @as(":active") active: state,
  // @as("[disabled]") disabled: state,
}
type resolve = value => output
type make = (. t) => string

let initial: t = #blue

let options: options = {
  blue: {
    textColor: Theme.color.white,
    accentColor: Theme.color.blue,
    hover: {
      accentColor: Theme.color.blueDark,
    },
    active: {
      accentColor: Theme.color.blue,
    },
    disabled: {
      accentColor: Theme.color.blue,
    },
  },
  gray: {
    textColor: Theme.color.white,
    accentColor: Theme.color.gray,
    hover: {
      accentColor: Theme.color.grayDark,
    },
    active: {
      accentColor: Theme.color.gray,
    },
    disabled: {
      accentColor: Theme.color.gray,
    },
  },
}
