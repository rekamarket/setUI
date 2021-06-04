import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import { Block, Inline } from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Block: typeof Block
  Inline: typeof Inline

  // supersets
  Placeholder: typeof Placeholder
}

const Quote: I<ComponentProps> = (props) => Component(props)

// subsets
Quote.Block = Block
Quote.Inline = Inline

// supersets
Quote.Placeholder = Placeholder

export default Quote
