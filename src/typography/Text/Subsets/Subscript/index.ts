import { default as Mimic } from './Mimic'
import { default as Pure, Props } from './Pure'

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLElement>
  > {
  Mimic: typeof Mimic
}

const Subscript = Pure as CompoundedComponent

Subscript.Mimic = Mimic

export { default as Generic } from './Generic'
export { ClassName } from './styles.css'
export { defaultProps as styles } from './defaultProps'
export default Subscript
