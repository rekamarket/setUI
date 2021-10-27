import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: '<p>',
    code: render(<Component>Параграф</Component>),
  },
]
