import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'

export default [
  {
    group: displayName,
    name: '<h1>: Заголовок центрированный',
    code: render(
      <Component textAlign="center">Заголовок центрированный</Component>
    ),
  },
]
