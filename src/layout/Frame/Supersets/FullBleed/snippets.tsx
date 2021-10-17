import render from 'react-element-to-jsx-string'
import RootComponent from '../../Set'
import Component, { displayName } from './'
import { Paragraph, H1 } from 'typography'
import { BackgroundImage } from 'layout'

export default [
  {
    group: displayName,
    name: '<Frame.FullBleed>',
    code: render(
      <RootComponent charsPerLine="large">
        <H1>Заголовок первого уровня</H1>
        <Paragraph>Многострочный текст</Paragraph>

        <Component>
          <BackgroundImage image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg" />
        </Component>
      </RootComponent>
    ),
  },
]
