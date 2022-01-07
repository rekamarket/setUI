open HTML

module H6 = {
  let tag = HTML.H6

  let contentCategories = [
    HTML.Flow,
    HTML.Heading,
    HTML.Palpable,
  ]

  let permittedContent = [
    HTML.Phrasing
  ]

  let implicitARIARole = [
    HTML.Heading
  ]

  let permittedARIARoles = [
    HTML.Tab,
    HTML.Presentation,
    HTML.None,
  ]
}
