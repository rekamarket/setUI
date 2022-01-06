import { ARIARoles, ContentCategories, Meta } from 'HTML'

const meta: Meta = {
  Tag: 'abbr',
  ContentCategories: [
    ContentCategories.FlowContent,
    ContentCategories.PhrasingContent,
    ContentCategories.PalpableContent,
  ],
  PermittedContent: [ContentCategories.PhrasingContent],
  TagOmission: [],
  ImplicitARIARole: [ARIARoles.None],
  PermittedARIARoles: [ARIARoles.Any],
}

// const DOMInterface = HTMLElement;
export default meta
