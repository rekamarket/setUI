import { FC } from 'react'
import Set, { Props } from './Set'
import { Main, Section } from './Subsets'

interface I<T = unknown> extends FC<T> {
  // subsets
  Main: typeof Main
  Section: typeof Section
}

const BackgroundImage: I<Props> = (props) => Set(props)

BackgroundImage.Main = Main
BackgroundImage.Section = Section

export type { Props } from './Set'
export default BackgroundImage
