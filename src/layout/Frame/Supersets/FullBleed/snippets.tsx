import { displayName } from './'

export default [
  {
    group: displayName,
    name: '<Frame.FullBleed>',
    code: `
      <Frame charsPerLine="large">
        <H1>Заголовок первого уровня</H1>
        <Paragraph>Многострочный текст</Paragraph>

        <${displayName}>
          <BackgroundImage image="https://upload.wikimedia.org/wikipedia/commons/d/d6/Dresden_Codex_pp.58-62_78.jpg" />
        </${displayName}>
      </Frame>
    `,
  },
]
