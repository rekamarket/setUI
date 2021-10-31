import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'
import { Important, TextInline } from 'typography'

export default [
  {
    group: displayName,
    name: '<ul>: Ненумерованный список',
    code: render(
      <Component>
        <TextInline>
          Пункт 1 <Important>очень важная часть</Important>
        </TextInline>
        <TextInline>Пункт 2</TextInline>
      </Component>
    ),
  },
]
