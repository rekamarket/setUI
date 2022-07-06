type t = {
  group: string,
  name: string,
  code: string,
}

type htmlTag = [
  | AHTML.tag
  | AbbrHTML.tag
  | AsideHTML.tag
  | BHTML.tag
  | BrHTML.tag
  | BlockquoteHTML.tag
  | ButtonHTML.tag
  | CiteHTML.tag
  | CodeHTML.tag
  | DataHTML.tag
  | DfnHTML.tag
  | DivHTML.tag
  | DdHTML.tag
  | DlHTML.tag
  | DtHTML.tag
  | EmHTML.tag
  | FigcaptionHTML.tag
  | H1HTML.tag
  | H2HTML.tag
  | H3HTML.tag
  | H4HTML.tag
  | H5HTML.tag
  | H6HTML.tag
  | IHTML.tag
  | KbdHTML.tag
  | MarkHTML.tag
  | OlHTML.tag
  | PHTML.tag
  | SHTML.tag
  | SampHTML.tag
  | SectionHTML.tag
  | SmallHTML.tag
  | SpanHTML.tag
  | StrongHTML.tag
  | SubHTML.tag
  | SupHTML.tag
  | TimeHTML.tag
  | UHTML.tag
  | UlHTML.tag
  | VarHTML.tag
  | WbrHTML.tag
]

type tag =
  | HTMLTag(htmlTag)
  | HTMLSet(array<htmlTag>)

let getName = (~tag, ~description: string) => {
  switch tag {
  | HTMLTag(pv) => `<${(pv :> string)}>: ${description}`
  | HTMLSet(a) =>
    `[${Belt.Array.reduce(a, "", (a, b) =>
        a ++ (a === "" ? "" : " ") ++ (b :> string)
      )}]: ${description} Group`
  }
}

type value =
  | Number(int)
  | String(string)
  | Boolean(bool)
  | Function(string)

type prop = (string, value)

let attributeFromProp = (. acc, (k, v)) =>
  acc ++
  " " ++
  k ++
  "=" ++
  switch v {
  | Number(int) => `{${int->Belt.Int.toString}}`
  | String(s) => `"${s}"`
  | Boolean(b) => `{${b == true ? "true" : "false"}}`
  | Function(s) => `{${s}}`
  }

let getCode = (~component: string, ~content: option<string>, ~props: list<prop>) => {
  let attributes = props->Belt.List.reduceU("", attributeFromProp)

  switch content {
  | Some(s) => `<${component}${attributes}>${s}</${component}>`
  | None => `<${component}${attributes} />`
  }
}
