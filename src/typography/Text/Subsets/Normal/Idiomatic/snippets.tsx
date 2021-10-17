import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: '<span>',
    code: render(<Component>строчный текст</Component>),
  },
]
