open HTML

module H5 = {
  let tag = HTML.H5

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
