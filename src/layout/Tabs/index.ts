import { FC } from 'react'
import Component, { Props as ComponentProps } from './Component/Tabs'
import Panel, { Props as PanelProps } from './Component/Panel'

interface I<T = unknown> extends FC<T> {
  // subcomponents
  Panel: typeof Panel
}

const Tabs: I<ComponentProps> = (props) => Component(props)

// subcomponents
Tabs.Panel = Panel

export default Tabs
