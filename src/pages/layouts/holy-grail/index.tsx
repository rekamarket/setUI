import { ButtonLink } from 'button'
import { Segment, Viewport } from 'layout'
import { Heading } from 'typography'

// https://csslayout.io/patterns/holy-grail/

const HolyGrail = () => {
  return (
    <Viewport>
      <Segment.Column padding="xxlarge" gap="small">
        <Segment.Start padding="large">
          <Heading.Placeholder level={1} />
        </Segment.Start>

        <Segment.Interval>
          <Segment gap="xlarge">
            <Segment.Start padding="large">header</Segment.Start>

            <Segment.Interval padding="large">Segment</Segment.Interval>

            <Segment.End padding="large">Footer</Segment.End>
          </Segment>
        </Segment.Interval>

        <Segment.End padding="large">Footer</Segment.End>
      </Segment.Column>
    </Viewport>
  )
}

export default HolyGrail
