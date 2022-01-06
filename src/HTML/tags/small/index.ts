import { ARIARoles, ContentCategories, Meta } from 'HTML'

const meta: Meta = {
  Tag: 'small',
  ContentCategories: [
    ContentCategories.FlowContent,
    ContentCategories.PhrasingContent,
    // ContentCategories.PalpableContent, // no Palpable? stange
  ],
  PermittedContent: [ContentCategories.PhrasingContent],
  TagOmission: [],
  ImplicitARIARole: [ARIARoles.None],
  PermittedARIARoles: [ARIARoles.Any],
}

// const DOMInterface = HTMLElement;
export default meta
