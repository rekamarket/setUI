module VariantReflection = {
  let key = "variant"

  @genType
  type t = [
    | #solid
    | #ghost
    | #borderless
    | #text
  ]

  let initial = #solid;

  type variant = {
    "solid": string,
    "ghost": string,
    "borderless": string,
    "text": string,
  };
}
