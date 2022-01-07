open HTML

module H3 = {
  let tag = HTML.H3

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
