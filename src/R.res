let title = (
  ~name: string,
  ~group: option<string>,
) => `---\n
title: ${name}
${switch group {
| Some(s) => "group:\n" ++ `\u0009` ++ "title: " ++ s
| None => ""
}}
\n---\n`;

type rec value =
  | Number(int)
  | String(string)
  | Function(string)
  | Boolean(bool)
  | Object(Js.Dict.t<value>)

type prop = (string, value)

let toStringArray = (array: array<string>) => array -> Js.Array2.map((e) => String(e))

let rec objectFromProp = (value: value) => {
  switch value {
  | Number(int) => int -> Belt.Int.toString
  | String(s) => `"${s}"`
  | Function(s) => `${s}`
  | Boolean(b) => b == true ? "true" : "false"
  | Object(o) => o -> Js.Dict.entries -> Belt.Array.reduce("", (acc, (key, v)) => acc ++ (acc == "" ? "" : ", ") ++ key ++ ": " ++ objectFromProp(v))
  }
}

let attributeFromProp = (. acc, (k, v)) =>
  acc ++ " " ++ k ++ "=" ++ switch v {
  | Number(int) => `{${int -> Belt.Int.toString}}`
  | String(s) => `"${s}"`
  | Function(s) => `{${s}}`
  | Boolean(b) => `{${b == true ? "true" : "false"}}`
  | Object(o) => `{{ ${o -> Js.Dict.entries -> Belt.Array.reduce("", (acc, (key, value)) => acc ++ (acc == "" ? "" : ", ") ++ key ++ ": " ++ objectFromProp(value))} }}`
  }

type root =
| Fragment({ children: string })
| Root({ tag: string, children: option<string>, props: option<array<prop>> })

let defaultTag = "div"

let defaultProps = [
  ("style", Object(Js.Dict.fromArray([
    ("display", String("grid")),
    ("gap", Number(10)),
  ])))
] -> Some

let component = (. ~root, ~prefix: option<string>) => {
  let tabs = switch prefix {
  | Some(s) => s
  | None => ""
  }

  tabs ++ switch root {
  | Root({ tag, children, props }) => switch (children, props) {
    | (Some(c), Some(p)) =>`<${tag}${p -> Belt.Array.reduceU("", attributeFromProp)}>\n${tabs}${c}\n${tabs}</${tag}>`
    | (Some(c), None) =>`<${tag}>\n${tabs}${c}\n${tabs}</${tag}>`
    | (None, Some(p)) =>`<${tag}${p -> Belt.Array.reduceU("", attributeFromProp)} />`
    | (None, None) => `<${tag} />`
    }
  | Fragment({ children }) => `<>\n${tabs}${children}\n</>`
  }
}

let block = (.
  ~tag: string,
  ~key: string,
  ~children: option<string>,
  ~values: array<value>,
  ~staticProps: option<array<prop>>
) => {
  let prefix = `\u0009`

  values -> Belt.Array.reduce("", (acc, cur) => acc ++ (acc == "" ? "" : "\n") ++ component(.
    ~root = Root({
      tag,
      children: switch children {
      | Some(s) => (prefix ++ s) -> Some
      | None => None
      },
      props: [(key, cur)] -> Belt.Array.concat(switch staticProps {
      | Some(s) => s
      | None => []
      }) -> Some,
    }),
    ~prefix = prefix -> Some,
  ))
}

let section = (
  ~title: string,
  ~description: option<string>,
  ~tag: string,
  ~root,
  ~imports: option<array<string>>,
) => `## ${title}
${switch description {
| Some(s) => s ++ "\n"
| None => ""
}}
${"```tsx"}
import React from 'react'
import { ${tag}${switch imports {
| Some(a) => a -> Belt.Array.reduce("", (acc, cur) => acc ++ ", " ++ cur)
| None => ""
}} } from '@rekamarket/sber-business-ui'

export default () => (${component(. ~root, ~prefix = None)})
${"```"}
`;

let header = (.
  ~title: string,
) => `# ${title}\n`

type t = {
  title: string,
  description: option<string>,
  root,
}
