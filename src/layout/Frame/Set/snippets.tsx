import { displayName } from './'

export default [
  {
    group: displayName,
    name: '<Frame>',
    code: `
      <${displayName} charsPerLine="large">
        <H1>Заголовок первого уровня</H1>
        <Paragraph>Многострочный текст</Paragraph>
      </${displayName}>
    `,
  },
]
