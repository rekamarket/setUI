import { ARIARoles, ContentCategories, Meta } from 'HTML'

const meta: Meta<HTMLDivElement> = {
  Tag: 'div',
  ContentCategories: [
    ContentCategories.FlowContent,
    ContentCategories.PalpableContent,
  ],
  PermittedContent: [ContentCategories.FlowConten],
  TagOmission: [],
  ImplicitARIARole: [ARIARoles.None],
  PermittedARIARoles: [ARIARoles.Any],
  DOMInterface: HTMLDivElement,
}

export default meta
