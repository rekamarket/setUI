import { FC } from 'react'
import Set, { Props } from './Set'
import { Block, Inline } from './Subsets'
import { Placeholder } from './Supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Block: typeof Block
  Inline: typeof Inline

  // supersets
  Placeholder: typeof Placeholder
}

const Quote: I<Props> = (props) => Set(props)

// subsets
Quote.Block = Block
Quote.Inline = Inline

// supersets
Quote.Placeholder = Placeholder

export default Quote
