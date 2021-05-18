import { ButtonLink } from 'button'
import { Segment, Viewport } from 'layout'

// https://csslayout.io/patterns/sidebar/

const Sidebar = () => {
  return (
    <Viewport>
      <Segment padding="large" gap="small">
        <Segment.Start padding="large">sidebar</Segment.Start>

        <Segment.Interval>Content</Segment.Interval>
      </Segment>
    </Viewport>
  )
}

export default Sidebar
