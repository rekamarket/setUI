open HTML

module Wbr = {
  let tag = HTML.Wbr

  let contentCategories = [
    HTML.Flow,
    HTML.Phrasing,
  ]

  let permittedContent = [
    HTML.Empty
  ]

  let implicitARIARole = [
    HTML.None
  ]

  let permittedARIARoles = [
    HTML.Any,
  ]
}
