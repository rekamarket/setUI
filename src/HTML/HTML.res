module HTML = {
  @genType
  type content =
  | None
  | Empty
  | Transparent
  | Metadata
  | Flow
  | Sectioning
  | Heading
  | Phrasing
  | Embedded
  | Interactive
  | Palpable
  | FormAssociated
  | ScriptSupportingElements

  @genType
  type ariaRole =
  | None
  | Any
  | Group
  | Heading
  | Tab
  | Presentation
  | Link
  | Button
  | Checkbox
  | MenuItem
  | MenuItemCheckbox
  | MenuItemRadio
  | Option
  | Radio
  | Switch
  | TreeItem
  | Term
  | Separator

  @genType
  type tag =
  | A
  | Abbr
  | B
  | Br
  | Cite
  | Code
  | Data
  | Dfn
  | Div
  | Em
  | Figcaption
  | H1
  | H2
  | H3
  | H4
  | H5
  | H6
  | Hr
  | I
  | Kbd
  | Mark
  | P
  | S
  | Samp
  | Small
  | Span
  | Strong
  | Sub
  | Sup
  | Time
  | U
  | Var
  | Wbr

  @genType
  type semanticallyNeutralTags =
  | Div
  | Span
}
