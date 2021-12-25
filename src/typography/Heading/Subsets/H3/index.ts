import { default as Hollow } from './Hollow'
import { default as Pure, Props } from './Pure'

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLElement>
  > {
  Hollow: typeof Hollow
}

const H3 = Pure as CompoundedComponent

H3.Hollow = Hollow

export { default as Generic } from './Generic'
export { ClassName } from './styles.css'
export { defaultProps as styles } from './defaultProps'
export default H3
