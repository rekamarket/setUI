import { FC } from 'react'
import Set, { Props } from './Set'
import { Cover } from './Supersets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Cover: typeof Cover
}

const BackgroundImage: I<Props> = (props) => Set(props)

BackgroundImage.Cover = Cover

export { Cover } from './Supersets'
export type { Props } from './Set'
export { default as CoverSnippets } from './Supersets/Extensions/Cover/snippets'
export default BackgroundImage
