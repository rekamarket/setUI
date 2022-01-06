import { ARIARoles, ContentCategories, Meta } from 'HTML'

const meta: Meta = {
  Tag: 'time',
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

// const DOMInterface = HTMLTimeElement;
export default meta
