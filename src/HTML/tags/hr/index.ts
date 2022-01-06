import { ARIARoles, ContentCategories, Meta } from 'HTML'

const meta: Meta = {
  Tag: 'hr',
  ContentCategories: [ContentCategories.FlowContent],
  PermittedContent: [ContentCategories.Empty],
  TagOmission: [],
  ImplicitARIARole: [ARIARoles.Separator],
  PermittedARIARoles: [ARIARoles.None, ARIARoles.Presentation],
}

// const DOMInterface = HTMLHRElement;
export default meta
