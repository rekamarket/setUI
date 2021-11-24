open Spacing

module SpacingBeforeIndex = {
  include Spacing

  type output = { "paddingInlineStart": Spacing.value }
  type cssResolve = (Spacing.value) => output
  let cssResolve = (value) => {{ "paddingInlineStart": value }};

  @genType
  type i = { "spacingBefore": Spacing.t }
}
