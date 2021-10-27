import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: '<h5>: Заголовок пятого уровня',
    code: render(<Component>Заголовок пятого уровня</Component>),
  },
]
