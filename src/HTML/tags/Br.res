open HTML

module Br = {
  let tag = HTML.Br

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
    HTML.None,
    HTML.Presentation,
  ]
}
