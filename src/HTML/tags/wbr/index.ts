import { ARIARoles, ContentCategories, Meta } from 'HTML'

const meta: Meta = {
  Tag: 'wbr',
  ContentCategories: [
    ContentCategories.FlowContent,
    ContentCategories.PhrasingContent,
  ],
  PermittedContent: [ContentCategories.Empty],
  TagOmission: [],
  ImplicitARIARole: [ARIARoles.None],
  PermittedARIARoles: [ARIARoles.Any],
}

// const DOMInterface = HTMLElement;
export default meta
