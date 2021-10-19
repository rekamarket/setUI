import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: '<p>: Параграф',
    code: render(<Component>Какой-то текст</Component>),
  },
]
