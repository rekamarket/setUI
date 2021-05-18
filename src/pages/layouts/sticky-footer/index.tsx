import { ButtonLink } from 'button'
import { SegmentColumn as Column, Viewport } from 'layout'

// https://csslayout.io/patterns/sticky-footer/

const StickyFooter = () => {
  return (
    <Viewport>
      <Column padding="large" gap="small">
        <Column.Interval>Content</Column.Interval>

        <Column.End padding="large">Footer</Column.End>
      </Column>
    </Viewport>
  )
}

export default StickyFooter
