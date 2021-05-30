import { FC, useMemo } from 'react'
import { Props } from './types'
import { Sentence, Letter } from './styles.css'

// '▁▂▃▄▅▆▇█'

const Component: FC<Props> = ({ length = 10 }) => {
  const sentence = useMemo(
    () => Array.from({ length }, (_) => '▅'),
    [length],
  );

  return (
    <span className={Sentence}>
      {sentence.map((letter, index) => (
        <span
          key={index}
          className={Letter}
        >
          {letter}
        </span>
      ))}
    </span>
  )
}

export type { Props } from './types'

export default Component
