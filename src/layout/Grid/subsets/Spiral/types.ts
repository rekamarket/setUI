import type { Props as ParentProps } from '../../Component'

export type Props = ParentProps & {
  children: [React.ReactNode, React.ReactNode, React.ReactNode]
}
