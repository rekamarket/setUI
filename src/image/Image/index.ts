import { FC } from 'react'
import Set, { Props } from './Set'

interface I<T = unknown> extends FC<T> {}

const Image: I<Props> = (props) => Set(props)

export type { Props } from './Set'
export { default as ImageSnippets } from './Set/snippets'
export default Image
