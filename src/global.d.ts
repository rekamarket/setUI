declare interface Basic {
  className?: string
  style?: React.CSSProperties
}

// eslint-disable-next-line
declare type Slot = React.ReactElement<any, string | any>

declare type ReactNode =
  | React.ReactChild
  | React.ReactNodeArray
  | ReadonlyArray<ReactNode>
  | React.ReactPortal
// | boolean
// | null
// | undefined;
