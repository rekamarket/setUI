export enum ContentCategories {
  Transparent = 'Transparent',
  MetadataСontent = 'Metadata content',
  FlowContent = 'Flow content',
  SectioningContent = 'Sectioning content',
  HeadingContent = 'Heading content',
  PhrasingContent = 'Phrasing content',
  EmbeddedContent = 'Embedded content',
  InteractiveContent = 'Interactive content',
  PalpableContent = 'Palpable content',
  FormAssociatedContent = 'Form-associated content',
  ScriptSupportingElements = 'Script-supporting elements',
}

export enum ARIARoles {
  None = 'None',
  Any = 'Any',
  Heading = 'heading',
  Tab = 'tab',
  Presentation = 'presentation',
  Link = 'link',
  Button = 'button',
  Checkbox = 'checkbox',
  MenuItem = 'menuitem',
  MenuItemCheckbox = 'menuitemcheckbox',
  MenuItemRadio = 'menuitemradio',
  Option = 'option',
  Radio = 'radio',
  Switch = 'switch',
  TreeItem = 'treeitem',
}

export type Meta = {
  Tag: string
  ContentCategories: Array<ContentCategories>
  PermittedContent: Array<ContentCategories>
  TagOmission: Array<unknown>
  ImplicitARIARole: Array<ARIARoles>
  PermittedARIARoles: Array<ARIARoles>
}

export type SemanticallyNeutralTags = 'div' | 'span'
