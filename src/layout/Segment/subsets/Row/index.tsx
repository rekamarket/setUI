import { FC } from 'react'
import { DirectionMap } from '../../css'
import Segment, { Props } from '../../Segment'
import Start from '../../Start'
import Interval from '../../Interval'
import End from '../../End'

interface I<T = unknown> extends FC<T> {
  Start: typeof Start
  Interval: typeof Interval
  End: typeof End
}

const SegmentRow: I<Omit<Props, 'direction'>> = (props) =>
  Segment({
    direction: DirectionMap.row,
    ...props,
  })

SegmentRow.Start = Start
SegmentRow.Interval = Interval
SegmentRow.End = End

export default SegmentRow
