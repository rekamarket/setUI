open Spacing

module SpacingAfterIndex = {
  include Spacing

  type output = { "paddingInlineEnd": Spacing.value }
  type cssResolve = (Spacing.value) => output
  let cssResolve = (value) => {{ "paddingInlineEnd": value }};

  @genType
  type i = { "spacingAfter": Spacing.t }
}
