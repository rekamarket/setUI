import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: '<h1>: Заголовок первого уровня',
    code: render(<Component>Заголовок первого уровня</Component>),
  },
]
