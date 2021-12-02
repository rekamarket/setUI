import { Props, Idiomatic as Set } from './Set'

import {
  H1Configurable as H1,
  H2Configurable as H2,
  H3Configurable as H3,
  H4Configurable as H4,
  H5Configurable as H5,
  H6Configurable as H6,
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

const Heading = Set as CompoundedComponent

// subsets
Heading.H1 = H1
Heading.H2 = H2
Heading.H3 = H3
Heading.H4 = H4
Heading.H5 = H5
Heading.H6 = H6

export type { Props } from './Set'

export {
  H1Idiomatic as H1,
  h1,
  H2Idiomatic as H2,
  h2,
  H3Idiomatic as H3,
  h3,
  H4Idiomatic as H4,
  h4,
  H5Idiomatic as H5,
  h5,
  H6Idiomatic as H6,
  h6,
} from './Subsets'

export default Heading
