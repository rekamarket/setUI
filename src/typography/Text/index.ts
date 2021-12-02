import { Props, Idiomatic as Set } from './Set'

import {
  ImportantConfigurable as Important,
  TextInlineConfigurable as TextInline,
} from './Subsets'

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLElement>
  > {
  Important: typeof Important
  Inline: typeof TextInline
}

const Text = Set as CompoundedComponent

// subsets
Text.Important = Important
Text.Inline = TextInline

export type { Props } from './Set'

export {
  ImportantIdiomatic as Important,
  TextInlineIdiomatic as TextInline,
} from './Subsets'

export default Text
