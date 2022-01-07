open HTML

module Hr = {
  let tag = HTML.Hr

  let contentCategories = [
    HTML.Flow,
  ]

  let permittedContent = [
    HTML.Empty
  ]

  let implicitARIARole = [
    HTML.Separator
  ]

  let permittedARIARoles = [
    HTML.Presentation,
    HTML.None,
  ]
}
