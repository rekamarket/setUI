import { ARIARoles, ContentCategories, Meta } from 'HTML'

const meta: Meta = {
  Tag: 'br',
  ContentCategories: [
    ContentCategories.FlowContent,
    ContentCategories.PhrasingContent,
  ],
  PermittedContent: [ContentCategories.Empty],
  TagOmission: [],
  ImplicitARIARole: [ARIARoles.None],
  PermittedARIARoles: [ARIARoles.None, ARIARoles.Presentation],
}

// const DOMInterface = HTMLBRElement;
export default meta
