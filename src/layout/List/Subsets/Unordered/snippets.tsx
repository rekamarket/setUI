import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'
import { Important } from 'typography'

export default [
  {
    group: displayName,
    name: '<ul>: Ненумерованный список',
    code: render(
      <Component>
        <Important>Пункт 1</Important>
        <Important>Пункт 2</Important>
      </Component>
    ),
  },
]
