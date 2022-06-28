@genType
type t = [
  | #solid
  | #ghost
  | #soft
  | #text
]

let args: array<t> = [#solid, #ghost, #soft, #text]

type r<'a> = {
  solid: 'a,
  ghost: 'a,
  soft: 'a,
  text: 'a,
}

type value = {
  color: string,
  backgroundColor: string,
  borderColor: string,
}

type options = r<value>
type variant = r<string>

type output = {
  color: string,
  backgroundColor: string,
  borderColor: string,
}
type resolve = value => output
type make = (. t) => string

let initial: t = #solid

let options: options = {
  solid: {
    color: "var(--text-color)",
    backgroundColor: "var(--accent-color)",
    borderColor: "var(--accent-color)",
  },
  ghost: {
    color: "var(--accent-color)",
    backgroundColor: "transparent",
    borderColor: "var(--accent-color)",
  },
  soft: {
    color: "var(--accent-color)",
    backgroundColor: "transparent",
    borderColor: "var(--accent-color)",
  },
  text: {
    color: "var(--accent-color)",
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
}
