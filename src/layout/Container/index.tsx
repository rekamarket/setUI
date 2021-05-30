import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component'
import { Large, Medium, Small } from './subsets'

interface I<T = unknown> extends FC<T> {
  Large: typeof Large
  Medium: typeof Medium
  Small: typeof Small
}

const Container: I<ComponentProps> = (props) => Component(props)

Container.Large = Large
Container.Medium = Medium
Container.Small = Small

export default Container
