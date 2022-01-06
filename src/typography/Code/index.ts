import Set from './Set'
import type { Props } from './Set'

import {
  InlineCodeGeneric as InlineCode,
  KeyboardInputGeneric as KeyboardInput,
  OutputGeneric as Output,
  VariableGeneric as Variable,
} from './Subsets'

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLElement>
  > {
  Inline: typeof InlineCode
  KeyboardInput: typeof KeyboardInput
  Output: typeof Output
  Variable: typeof Variable
}

const Code = Set as CompoundedComponent

// subsets
Code.Inline = InlineCode
Code.KeyboardInput = KeyboardInput
Code.Output = Output
Code.Variable = Variable

export type { Props } from './types'
export { code } from './Set'

export {
  InlineCode,
  inlineCode,
  KeyboardInput,
  keyboardInput,
  Output,
  output,
  Variable,
  variable,
} from './Subsets'

export default Code
