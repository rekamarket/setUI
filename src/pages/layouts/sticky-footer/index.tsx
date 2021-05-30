import { ButtonLink } from 'button'
import { Segment, Viewport } from 'layout'

// https://csslayout.io/patterns/sticky-footer/

const StickyFooter = () => {
  return (
    <Viewport>
      <Segment.Column padding="large" gap="small">
        <Segment.Interval>Content</Segment.Interval>

        <Segment.End padding="large">Footer</Segment.End>
      </Segment.Column>
    </Viewport>
  )
}

export default StickyFooter
