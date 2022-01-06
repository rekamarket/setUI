import { ARIARoles, ContentCategories, Meta } from 'HTML'

const meta: Meta = {
  Tag: 'dfn',
  ContentCategories: [
    ContentCategories.FlowContent,
    ContentCategories.PhrasingContent,
    ContentCategories.PalpableContent,
  ],
  PermittedContent: [ContentCategories.PhrasingContent],
  TagOmission: [],
  ImplicitARIARole: [ARIARoles.Term],
  PermittedARIARoles: [ARIARoles.Any],
}

// const DOMInterface = HTMLElement;
export default meta
