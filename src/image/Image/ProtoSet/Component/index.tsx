import { VFC, createElement } from 'react'
import NextImage from 'next/image'
import cn from 'classnames'
import { Props } from './types'
import { ClassName } from './styles.css'

const loader = ({ src }) => src

const Image: VFC<Props> = ({ className, src, ...rest }) => (
  <NextImage
    src={src}
    className={cn([className, ClassName])}
    loader={loader}
    {...rest}
  />
)

export type { Props } from './types'
export default Image
