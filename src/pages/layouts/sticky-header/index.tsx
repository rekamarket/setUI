import { ButtonLink } from 'button'
import { Segment, Viewport } from 'layout'

// https://csslayout.io/patterns/sticky-header/

const StickyHeader = () => {
  return (
    <Viewport>
      <Segment.Column padding="large" gap="small">
        <Segment.Start padding="large">Header</Segment.Start>

        <Segment.Interval>Content</Segment.Interval>
      </Segment.Column>
    </Viewport>
  )
}

export default StickyHeader
