---

title: Frame


---

# Frame

## Semantics
Значение по умолчанию - section; Можно переопределить как "div"

```tsx
import React from 'react'
import { Frame } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Frame tag="div">
		Frame Content
	</Frame>
</div>)
```

## max-inline-size
The max-inline-size CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the max-width or the max-height property, depending on the value of writing-mode. If the writing mode is vertically oriented, the value of max-inline-size relates to the maximal height of the element; otherwise, it relates to the maximal width of the element. A related property is max-block-size, which defines the other dimension of the element.

```tsx
import React from 'react'
import { Frame } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Frame max-inline-size="none">
		Frame Content
	</Frame>
	<Frame max-inline-size="s">
		Frame Content
	</Frame>
	<Frame max-inline-size="m">
		Frame Content
	</Frame>
	<Frame max-inline-size="l">
		Frame Content
	</Frame>
</div>)
```

## textAlign

```tsx
import React from 'react'
import { Frame } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Frame textAlign="center">
		Frame Content
	</Frame>
	<Frame textAlign="start">
		Frame Content
	</Frame>
	<Frame textAlign="end">
		Frame Content
	</Frame>
	<Frame textAlign="initial">
		Frame Content
	</Frame>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Frame } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Frame color="primary">
		Frame Content
	</Frame>
	<Frame color="secondary">
		Frame Content
	</Frame>
	<Frame color="black">
		Frame Content
	</Frame>
	<Frame color="white">
		Frame Content
	</Frame>
</div>)
```

## marginBlockEnd
The margin-block-end CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Frame } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Frame marginBlockEnd="size0">
		Frame Content
	</Frame>
	<Frame marginBlockEnd="size50">
		Frame Content
	</Frame>
	<Frame marginBlockEnd="size100">
		Frame Content
	</Frame>
	<Frame marginBlockEnd="size150">
		Frame Content
	</Frame>
	<Frame marginBlockEnd="size200">
		Frame Content
	</Frame>
	<Frame marginBlockEnd="size250">
		Frame Content
	</Frame>
	<Frame marginBlockEnd="size300">
		Frame Content
	</Frame>
	<Frame marginBlockEnd="size350">
		Frame Content
	</Frame>
	<Frame marginBlockEnd="size400">
		Frame Content
	</Frame>
	<Frame marginBlockEnd="size450">
		Frame Content
	</Frame>
	<Frame marginBlockEnd="size500">
		Frame Content
	</Frame>
	<Frame marginBlockEnd="size550">
		Frame Content
	</Frame>
	<Frame marginBlockEnd="size600">
		Frame Content
	</Frame>
	<Frame marginBlockEnd="size700">
		Frame Content
	</Frame>
	<Frame marginBlockEnd="size800">
		Frame Content
	</Frame>
</div>)
```

## marginBlockStart
The margin-block-start CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Frame } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Frame marginBlockStart="size0">
		Frame Content
	</Frame>
	<Frame marginBlockStart="size50">
		Frame Content
	</Frame>
	<Frame marginBlockStart="size100">
		Frame Content
	</Frame>
	<Frame marginBlockStart="size150">
		Frame Content
	</Frame>
	<Frame marginBlockStart="size200">
		Frame Content
	</Frame>
	<Frame marginBlockStart="size250">
		Frame Content
	</Frame>
	<Frame marginBlockStart="size300">
		Frame Content
	</Frame>
	<Frame marginBlockStart="size350">
		Frame Content
	</Frame>
	<Frame marginBlockStart="size400">
		Frame Content
	</Frame>
	<Frame marginBlockStart="size450">
		Frame Content
	</Frame>
	<Frame marginBlockStart="size500">
		Frame Content
	</Frame>
	<Frame marginBlockStart="size550">
		Frame Content
	</Frame>
	<Frame marginBlockStart="size600">
		Frame Content
	</Frame>
	<Frame marginBlockStart="size700">
		Frame Content
	</Frame>
	<Frame marginBlockStart="size800">
		Frame Content
	</Frame>
</div>)
```

## marginInlineEnd
The margin-inline-end CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction, and text-orientation.

```tsx
import React from 'react'
import { Frame } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Frame marginInlineEnd="size0">
		Frame Content
	</Frame>
	<Frame marginInlineEnd="size50">
		Frame Content
	</Frame>
	<Frame marginInlineEnd="size100">
		Frame Content
	</Frame>
	<Frame marginInlineEnd="size150">
		Frame Content
	</Frame>
	<Frame marginInlineEnd="size200">
		Frame Content
	</Frame>
	<Frame marginInlineEnd="size250">
		Frame Content
	</Frame>
	<Frame marginInlineEnd="size300">
		Frame Content
	</Frame>
	<Frame marginInlineEnd="size350">
		Frame Content
	</Frame>
	<Frame marginInlineEnd="size400">
		Frame Content
	</Frame>
	<Frame marginInlineEnd="size450">
		Frame Content
	</Frame>
	<Frame marginInlineEnd="size500">
		Frame Content
	</Frame>
	<Frame marginInlineEnd="size550">
		Frame Content
	</Frame>
	<Frame marginInlineEnd="size600">
		Frame Content
	</Frame>
	<Frame marginInlineEnd="size700">
		Frame Content
	</Frame>
	<Frame marginInlineEnd="size800">
		Frame Content
	</Frame>
</div>)
```

## marginInlineStart
The margin-inline-start CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the margin-top, margin-right, margin-bottom, or margin-left property depending on the values defined for writing-mode, direction, and text-orientation.

```tsx
import React from 'react'
import { Frame } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Frame marginInlineStart="size0">
		Frame Content
	</Frame>
	<Frame marginInlineStart="size50">
		Frame Content
	</Frame>
	<Frame marginInlineStart="size100">
		Frame Content
	</Frame>
	<Frame marginInlineStart="size150">
		Frame Content
	</Frame>
	<Frame marginInlineStart="size200">
		Frame Content
	</Frame>
	<Frame marginInlineStart="size250">
		Frame Content
	</Frame>
	<Frame marginInlineStart="size300">
		Frame Content
	</Frame>
	<Frame marginInlineStart="size350">
		Frame Content
	</Frame>
	<Frame marginInlineStart="size400">
		Frame Content
	</Frame>
	<Frame marginInlineStart="size450">
		Frame Content
	</Frame>
	<Frame marginInlineStart="size500">
		Frame Content
	</Frame>
	<Frame marginInlineStart="size550">
		Frame Content
	</Frame>
	<Frame marginInlineStart="size600">
		Frame Content
	</Frame>
	<Frame marginInlineStart="size700">
		Frame Content
	</Frame>
	<Frame marginInlineStart="size800">
		Frame Content
	</Frame>
</div>)
```

## paddingBlockEnd
The padding-block-end CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Frame } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Frame paddingBlockEnd="size0">
		Frame Content
	</Frame>
	<Frame paddingBlockEnd="size50">
		Frame Content
	</Frame>
	<Frame paddingBlockEnd="size100">
		Frame Content
	</Frame>
	<Frame paddingBlockEnd="size150">
		Frame Content
	</Frame>
	<Frame paddingBlockEnd="size200">
		Frame Content
	</Frame>
	<Frame paddingBlockEnd="size250">
		Frame Content
	</Frame>
	<Frame paddingBlockEnd="size300">
		Frame Content
	</Frame>
	<Frame paddingBlockEnd="size350">
		Frame Content
	</Frame>
	<Frame paddingBlockEnd="size400">
		Frame Content
	</Frame>
	<Frame paddingBlockEnd="size450">
		Frame Content
	</Frame>
	<Frame paddingBlockEnd="size500">
		Frame Content
	</Frame>
	<Frame paddingBlockEnd="size550">
		Frame Content
	</Frame>
	<Frame paddingBlockEnd="size600">
		Frame Content
	</Frame>
	<Frame paddingBlockEnd="size700">
		Frame Content
	</Frame>
	<Frame paddingBlockEnd="size800">
		Frame Content
	</Frame>
</div>)
```

## paddingBlockStart
The padding-block-start CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Frame } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Frame paddingBlockStart="size0">
		Frame Content
	</Frame>
	<Frame paddingBlockStart="size50">
		Frame Content
	</Frame>
	<Frame paddingBlockStart="size100">
		Frame Content
	</Frame>
	<Frame paddingBlockStart="size150">
		Frame Content
	</Frame>
	<Frame paddingBlockStart="size200">
		Frame Content
	</Frame>
	<Frame paddingBlockStart="size250">
		Frame Content
	</Frame>
	<Frame paddingBlockStart="size300">
		Frame Content
	</Frame>
	<Frame paddingBlockStart="size350">
		Frame Content
	</Frame>
	<Frame paddingBlockStart="size400">
		Frame Content
	</Frame>
	<Frame paddingBlockStart="size450">
		Frame Content
	</Frame>
	<Frame paddingBlockStart="size500">
		Frame Content
	</Frame>
	<Frame paddingBlockStart="size550">
		Frame Content
	</Frame>
	<Frame paddingBlockStart="size600">
		Frame Content
	</Frame>
	<Frame paddingBlockStart="size700">
		Frame Content
	</Frame>
	<Frame paddingBlockStart="size800">
		Frame Content
	</Frame>
</div>)
```

## paddingInlineEnd
The padding-inline-end CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Frame } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Frame paddingInlineEnd="size0">
		Frame Content
	</Frame>
	<Frame paddingInlineEnd="size50">
		Frame Content
	</Frame>
	<Frame paddingInlineEnd="size100">
		Frame Content
	</Frame>
	<Frame paddingInlineEnd="size150">
		Frame Content
	</Frame>
	<Frame paddingInlineEnd="size200">
		Frame Content
	</Frame>
	<Frame paddingInlineEnd="size250">
		Frame Content
	</Frame>
	<Frame paddingInlineEnd="size300">
		Frame Content
	</Frame>
	<Frame paddingInlineEnd="size350">
		Frame Content
	</Frame>
	<Frame paddingInlineEnd="size400">
		Frame Content
	</Frame>
	<Frame paddingInlineEnd="size450">
		Frame Content
	</Frame>
	<Frame paddingInlineEnd="size500">
		Frame Content
	</Frame>
	<Frame paddingInlineEnd="size550">
		Frame Content
	</Frame>
	<Frame paddingInlineEnd="size600">
		Frame Content
	</Frame>
	<Frame paddingInlineEnd="size700">
		Frame Content
	</Frame>
	<Frame paddingInlineEnd="size800">
		Frame Content
	</Frame>
</div>)
```

## paddingInlineStart
The padding-inline-start CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Frame } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Frame paddingInlineStart="size0">
		Frame Content
	</Frame>
	<Frame paddingInlineStart="size50">
		Frame Content
	</Frame>
	<Frame paddingInlineStart="size100">
		Frame Content
	</Frame>
	<Frame paddingInlineStart="size150">
		Frame Content
	</Frame>
	<Frame paddingInlineStart="size200">
		Frame Content
	</Frame>
	<Frame paddingInlineStart="size250">
		Frame Content
	</Frame>
	<Frame paddingInlineStart="size300">
		Frame Content
	</Frame>
	<Frame paddingInlineStart="size350">
		Frame Content
	</Frame>
	<Frame paddingInlineStart="size400">
		Frame Content
	</Frame>
	<Frame paddingInlineStart="size450">
		Frame Content
	</Frame>
	<Frame paddingInlineStart="size500">
		Frame Content
	</Frame>
	<Frame paddingInlineStart="size550">
		Frame Content
	</Frame>
	<Frame paddingInlineStart="size600">
		Frame Content
	</Frame>
	<Frame paddingInlineStart="size700">
		Frame Content
	</Frame>
	<Frame paddingInlineStart="size800">
		Frame Content
	</Frame>
</div>)
```
