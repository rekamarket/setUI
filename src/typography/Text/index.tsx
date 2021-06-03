import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import {
  Capitalize,
  Emphasis,
  Idiomatic,
  LineThrough,
  Lowercase,
  StressEmphasis,
  Strong,
  Thin,
  Underline,
  Uppercase,
} from './subsets'
import { Placeholder } from './supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Capitalize: typeof Capitalize
  Emphasis: typeof Emphasis
  Idiomatic: typeof Idiomatic
  Lowercase: typeof Lowercase
  StressEmphasis: typeof StressEmphasis
  Uppercase: typeof Uppercase

  LineThrough: typeof LineThrough
  Underline: typeof Underline

  Strong: typeof Strong
  Thin: typeof Thin

  // supersets
  Placeholder: typeof Placeholder
}

const Text: I<ComponentProps> = (props) => Component(props)

// subsets
Text.Capitalize = Capitalize
Text.Emphasis = Emphasis
Text.Idiomatic = Idiomatic
Text.Lowercase = Lowercase
Text.StressEmphasis = StressEmphasis
Text.Uppercase = Uppercase

Text.LineThrough = LineThrough
Text.Underline = Underline

Text.Strong = Strong
Text.Thin = Thin

// supersets
Text.Placeholder = Placeholder

export default Text
