import { ARIARoles, ContentCategories, Meta } from 'HTML'

const meta: Meta = {
  Tag: 'h2',
  ContentCategories: [
    ContentCategories.FlowContent,
    ContentCategories.HeadingContent,
    ContentCategories.PalpableContent,
  ],
  PermittedContent: [ContentCategories.PhrasingContent],
  TagOmission: [],
  ImplicitARIARole: [ARIARoles.Heading],
  PermittedARIARoles: [ARIARoles.Tab, ARIARoles.Presentation, ARIARoles.None],
}

// const DOMInterface = HTMLHeadingElement;
export default meta
