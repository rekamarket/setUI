import React, { VFC, useMemo } from 'react'
import cn from 'classnames'
import { BackgroundColor } from 'CSS'
import { Props } from './types'
import { ClassName } from './styles.css'
import { Size } from '../css'

const Component: VFC<Props> = ({ color, size, length = 3 }) => {
  const blocks = useMemo(() => Array.from({ length }), [length])

  return (
    <>
      {blocks.map((_, index) => (
        <div
          key={index}
          className={cn([
            ClassName,
            BackgroundColor[color] || BackgroundColor.default,
            Size[size] || Size.default,
          ])}
        />
      ))}
    </>
  )
}

export type { Props } from './types'

export default Component
