import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: '<blockquote>',
    code: render(<Component>Цитата</Component>),
  },
]
