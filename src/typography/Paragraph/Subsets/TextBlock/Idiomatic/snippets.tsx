import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: '<div>: блочный текст',
    code: render(<Component>Какой-то текст</Component>),
  },
]
