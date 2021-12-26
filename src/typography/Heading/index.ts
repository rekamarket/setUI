import type { Props } from './types'
import { Generic } from './Set'

import {
  H1Generic as H1,
  H2Generic as H2,
  H3Generic as H3,
  H4Generic as H4,
  H5Generic as H5,
  H6Generic as H6,
} from './Subsets'

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    Props & React.RefAttributes<HTMLElement>
  > {
  H1: typeof H1
  H2: typeof H2
  H3: typeof H3
  H4: typeof H4
  H5: typeof H5
  H6: typeof H6
}

const Heading = Generic as CompoundedComponent

// subsets
Heading.H1 = H1
Heading.H2 = H2
Heading.H3 = H3
Heading.H4 = H4
Heading.H5 = H5
Heading.H6 = H6

export type { Props } from './types'
export { Pure as H, h } from './Set'
export { H1, h1, H2, h2, H3, h3, H4, h4, H5, h5, H6, h6 } from './Subsets'
export default Heading
