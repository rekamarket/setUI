import { FC } from 'react'
import { DirectionMap } from '../../css'
import Segment, { Props } from '../../Segment'
import Start from '../../Start'
import Interval from '../../Interval'
import End from '../../End'

// #todo: Allow children to be only <Start /> or <Interval /> or <End />
// #todo: hide every other element inside of the `<Segment />` via css

interface I<T = unknown> extends FC<T> {
  Start: typeof Start
  Interval: typeof Interval
  End: typeof End
}

const SegmentOrigin: I<Props> = (props) => Segment(props)

SegmentOrigin.Start = Start
SegmentOrigin.Interval = Interval
SegmentOrigin.End = End

export default SegmentOrigin
