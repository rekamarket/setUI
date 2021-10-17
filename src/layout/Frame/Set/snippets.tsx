import render from 'react-element-to-jsx-string'
import Component, { displayName } from './'
import { Paragraph, H1 } from 'typography'

export default [
  {
    group: displayName,
    name: '<Frame>',
    code: render(
      <Component charsPerLine="large">
        <H1>Заголовок первого уровня</H1>
        <Paragraph>Многострочный текст</Paragraph>
      </Component>
    ),
  },
]
