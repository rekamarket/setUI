import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: '<blockquote>: блок с цитатой',
    code: render(<Component>Блок с цитатой</Component>),
  },
]
