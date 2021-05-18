import { ButtonLink } from 'button'
import { Segment, SegmentColumn as Column, Viewport } from 'layout'

// https://csslayout.io/patterns/holy-grail/

const HolyGrail = () => {
  return (
    <Viewport>
      <Column padding="large" gap="small">
        <Column.Start padding="large">header</Column.Start>

        <Column.Interval>
          <Segment gap="xlarge">
            <Segment.Start padding="large">header</Segment.Start>

            <Segment.Interval padding="large">Segment</Segment.Interval>

            <Segment.End padding="large">Footer</Segment.End>
          </Segment>
        </Column.Interval>

        <Column.End padding="large">Footer</Column.End>
      </Column>
    </Viewport>
  )
}

export default HolyGrail
