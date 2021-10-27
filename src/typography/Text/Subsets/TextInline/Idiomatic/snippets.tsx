import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: '<span>: строчный текст',
    code: render(<Component>строчный текст</Component>),
  },
]
