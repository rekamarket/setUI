import { ARIARoles, ContentCategories, Meta } from 'HTML'

const meta: Meta = {
  Tag: 'p',
  ContentCategories: [
    ContentCategories.FlowContent,
    ContentCategories.PalpableContent,
  ],
  PermittedContent: [ContentCategories.PhrasingContent],
  TagOmission: [],
  ImplicitARIARole: [ARIARoles.None],
  PermittedARIARoles: [ARIARoles.Any],
}

// const DOMInterface = HTMLParagraphElement;
export default meta
