import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: '<h6>: Заголовок шестого уровня',
    code: render(<Component>Заголовок шестого уровня</Component>),
  },
]
