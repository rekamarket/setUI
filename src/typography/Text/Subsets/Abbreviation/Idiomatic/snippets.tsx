import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: 'Аббревиатура',
    code: render(<Component title="HyperText Markup Language">HTML</Component>),
  },
]
