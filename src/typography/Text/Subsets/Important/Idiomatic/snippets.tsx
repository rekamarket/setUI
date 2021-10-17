import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: '<strong>',
    code: render(<Component>Элемент сильной значимости</Component>),
  },
]
