import { FC } from 'react'
import { Props } from './types'
import { Sentence, Letter, LetterUp, LetterInvisible } from './styles.css'

// '▁▂▃▄▅▆▇█'

const sentence = Array.from(
  `People have confused playing devils advocate with being intelligent.`
)

const map = {
  P: '█',

  b: '▇',
  d: '▇',
  f: '▇',
  h: '▇',
  l: '▇',

  t: '▆',
  i: '▆',

  a: '▅',
  c: '▅',
  o: '▅',
  n: '▅',
  v: '▅',
  e: '▅',
  u: '▅',
  s: '▅',
  w: '▅',

  p: '▇',
  g: '▇',
  y: '▇',
}

const Placeholder: FC<Props> = ({ length }) => {
  return (
    <span className={Sentence}>
      {sentence.map((letter, index) => (
        <span
          key={index}
          className={
            map[letter]
              ? 'pgy'.includes(letter)
                ? Letter
                : LetterUp
              : LetterInvisible
          }
        >
          {map[letter] || '█'}
        </span>
      ))}
    </span>
  )
}

export type { Props } from './types'

export default Placeholder
