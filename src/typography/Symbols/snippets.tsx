import render from 'react-element-to-jsx-string'
import Space, { displayName as displayNameSpace } from './Space'
import NonBreakable, {
  displayName as displayNameNonBreakable,
} from './NonBreakable'

export default [
  {
    group: displayNameSpace,
    name: 'пробел',
    code: render(<Space />),
  },

  {
    group: displayNameNonBreakable,
    name: 'неразрывный пробел',
    code: render(<NonBreakable />),
  },
]
