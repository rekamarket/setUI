open HTML

module Sub = {
  let tag = HTML.Sub

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
