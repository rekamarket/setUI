import { ARIARoles, ContentCategories, Meta } from 'HTML'

const meta: Meta = {
  Tag: 'figcaption',
  ContentCategories: [ContentCategories.None],
  PermittedContent: [ContentCategories.FlowContent],
  TagOmission: [],
  ImplicitARIARole: [ARIARoles.None],
  PermittedARIARoles: [ARIARoles.Group, ARIARoles.Presentation, ARIARoles.None],
}

// const DOMInterface = HTMLElement;
export default meta
