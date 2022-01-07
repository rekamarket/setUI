open HTML

module Cite = {
  let tag = HTML.Cite

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
