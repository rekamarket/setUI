import { ButtonLink } from 'button'
import { SegmentColumn as Column, Viewport } from 'layout'

// https://csslayout.io/patterns/sticky-header/

const StickyHeader = () => {
  return (
    <Viewport>
      <Column padding="large" gap="small">
        <Column.Start padding="large">Header</Column.Start>

        <Column.Interval>Content</Column.Interval>
      </Column>
    </Viewport>
  )
}

export default StickyHeader
