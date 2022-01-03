import { ARIARoles, ContentCategories, Meta } from 'HTML'

const meta: Meta = {
  Tag: 'div',
  ContentCategories: [
    ContentCategories.FlowContent,
    ContentCategories.PalpableContent,
  ],
  PermittedContent: [ContentCategories.FlowContent],
  TagOmission: [],
  ImplicitARIARole: [ARIARoles.None],
  PermittedARIARoles: [ARIARoles.Any],
}

// const DOMInterface = HTMLDivElement;
export default meta
