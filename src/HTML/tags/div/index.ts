import { ARIARoles, ContentCategories } from 'HTML'

const Tag = 'div'

const ContentCategories = [
  ContentCategories.FlowContent,
  ContentCategories.PalpableContent,
]

const PermittedContent = [ContentCategories.FlowConten]

const TagOmission = []

const ImplicitARIARole = [ARIARoles.None]
const PermittedARIARoles = [ARIARoles.Any]

const DOMInterface = HTMLDivElement

export default {
  Tag,
  ContentCategories,
  PermittedContent,
  TagOmission,
  ImplicitARIARole,
  PermittedARIARoles,
  DOMInterface,
}
