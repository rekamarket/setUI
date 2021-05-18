import { FC } from 'react'
import Segment, { Props } from '../../Segment'
import Start from '../../Start'
import Interval from '../../Interval'
import End from '../../End'

interface I<T = unknown> extends FC<T> {
  Start: typeof Start
  Interval: typeof Interval
  End: typeof End
}

const SegmentColumn: I<Omit<Props, 'direction'>> = (props) =>
  Segment({
    direction: 'column',
    ...props,
  })

SegmentColumn.Start = Start
SegmentColumn.Interval = Interval
SegmentColumn.End = End

export default SegmentColumn
