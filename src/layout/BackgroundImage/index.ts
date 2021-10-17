import { FC } from 'react'
import Set, { Props } from './Set'
import { Cover } from './Subsets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Cover: typeof Cover
}

const BackgroundImage: I<Props> = (props) => Set(props)

BackgroundImage.Cover = Cover

export { Cover } from './Subsets'
export type { Props } from './Set'
export { default as CoverSnippets } from './Subsets/Cover/snippets'
export default BackgroundImage
