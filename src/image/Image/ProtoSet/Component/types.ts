import { ImageProps } from 'next/image'

export type Props = {
  src: string
  className?: string
} & ImageProps
