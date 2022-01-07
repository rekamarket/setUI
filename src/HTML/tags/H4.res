open HTML

module H4 = {
  let tag = HTML.H4

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
