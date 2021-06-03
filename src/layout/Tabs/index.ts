import { VFC } from 'react'
import Component from './Component/Tabs'
import type { Props as ComponentProps } from './Component/Tabs'
import Panel from './Component/Panel'
import type { Props as PanelProps } from './Component/Panel'

interface I<T = unknown> extends VFC<T> {
  // subcomponents
  Panel: typeof Panel
}

const Tabs: I<ComponentProps> = (props) => Component(props)

// subcomponents
Tabs.Panel = Panel

export default Tabs
