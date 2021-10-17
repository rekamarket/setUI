import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: 'Заголовок шестого уровня',
    code: render(<Component>Заголовок шестого уровня</Component>),
  },
]
