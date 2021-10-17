import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: 'Заголовок третьего уровня',
    code: render(<Component>Заголовок третьего уровня</Component>),
  },
]
