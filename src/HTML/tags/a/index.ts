import { ARIARoles, ContentCategories, Meta } from 'HTML'

const meta: Meta = {
  Tag: 'a',
  ContentCategories: [
    ContentCategories.FlowContent,
    ContentCategories.PhrasingContent,
    ContentCategories.InteractiveContent,
    ContentCategories.PalpableContent,
  ],
  PermittedContent: [ContentCategories.Transparent],
  TagOmission: [],
  ImplicitARIARole: [ARIARoles.Link, ARIARoles.None],
  PermittedARIARoles: [
    ARIARoles.Button,
    ARIARoles.Checkbox,
    ARIARoles.MenuItem,
    ARIARoles.MenuItemCheckbox,
    ARIARoles.MenuItemRadio,
    ARIARoles.Option,
    ARIARoles.Radio,
    ARIARoles.Switch,
    ARIARoles.Tab,
    ARIARoles.TreeItem,
    ARIARoles.Any,
  ],
}

// const DOMInterface = HTMLAnchorElement;
export default meta
