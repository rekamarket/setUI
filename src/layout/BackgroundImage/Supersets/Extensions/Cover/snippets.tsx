import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'
import { H1 } from 'typography'

export default [
  {
    group: displayName,
    name: 'Обложка',
    code: render(
      <Component image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg">
        <H1>Центрированный заголовок</H1>
      </Component>
    ),
  },
]
