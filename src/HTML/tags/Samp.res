open HTML

module Samp = {
  let tag = HTML.Samp

  let contentCategories = [
    HTML.Flow,
    HTML.Phrasing,
    HTML.Palpable,
  ]

  let permittedContent = [
    HTML.Phrasing
  ]

  let implicitARIARole = [
    HTML.None
  ]

  let permittedARIARoles = [
    HTML.Any,
  ]
}
