import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: `<time>: Время\Дата`,
    code: render(<Component>04.12.1995</Component>),
  },
]
