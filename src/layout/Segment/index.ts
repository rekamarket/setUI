import { VFC } from 'react'
import Component, { Props as ComponentProps } from './Component/Segment'
import Interval, { Props as IntervalProps } from './Component/Interval'
import Start, { Props as StartProps } from './Component/Start'
import End, { Props as EndProps } from './Component/End'
import { Column, Row } from './subsets'

interface I<T = unknown> extends VFC<T> {
  // subcomponents
  Interval: typeof Interval
  Start: typeof Start
  End: typeof End

  // subsets
  Column: typeof Column
  Row: typeof Row
}

const Segment: I<ComponentProps> = (props) => Component(props)

// subcomponents
Segment.Interval = Interval
Segment.Start = Start
Segment.End = End

// subsets
Segment.Column = Column
Segment.Row = Row

export default Segment
