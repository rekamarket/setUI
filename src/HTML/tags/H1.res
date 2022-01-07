open HTML

module H1 = {
  let tag = HTML.H1

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
