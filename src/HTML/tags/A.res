open HTML

module A = {
  let tag = HTML.A

  let contentCategories = [
    HTML.Flow,
    HTML.Phrasing,
    HTML.Interactive,
    HTML.Palpable,
  ]

  let permittedContent = [
    HTML.Transparent
  ]

  let implicitARIARole = [
    HTML.Link,
    HTML.None
  ]

  let permittedARIARoles = [
    HTML.Button,
    HTML.Checkbox,
    HTML.MenuItem,
    HTML.MenuItemCheckbox,
    HTML.MenuItemRadio,
    HTML.Option,
    HTML.Radio,
    HTML.Switch,
    HTML.Tab,
    HTML.TreeItem,
    HTML.Any,
  ]
}
