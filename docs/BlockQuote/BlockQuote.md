---

title: BlockQuote


---

# BlockQuote

## Semantics
Значение по умолчанию - blockquote; Можно переопределить как "div"

```tsx
import React from 'react'
import { BlockQuote } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<BlockQuote tag="div">
		BlockQuote
	</BlockQuote>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { BlockQuote } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<BlockQuote color="primary">
		BlockQuote
	</BlockQuote>
	<BlockQuote color="secondary">
		BlockQuote
	</BlockQuote>
	<BlockQuote color="black">
		BlockQuote
	</BlockQuote>
	<BlockQuote color="white">
		BlockQuote
	</BlockQuote>
</div>)
```

## marginBlockEnd
The margin-block-end CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { BlockQuote } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<BlockQuote marginBlockEnd="size0">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockEnd="size50">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockEnd="size100">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockEnd="size150">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockEnd="size200">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockEnd="size250">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockEnd="size300">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockEnd="size350">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockEnd="size400">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockEnd="size450">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockEnd="size500">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockEnd="size550">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockEnd="size600">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockEnd="size700">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockEnd="size800">
		BlockQuote
	</BlockQuote>
</div>)
```

## marginBlockStart
The margin-block-start CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { BlockQuote } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<BlockQuote marginBlockStart="size0">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockStart="size50">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockStart="size100">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockStart="size150">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockStart="size200">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockStart="size250">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockStart="size300">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockStart="size350">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockStart="size400">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockStart="size450">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockStart="size500">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockStart="size550">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockStart="size600">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockStart="size700">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginBlockStart="size800">
		BlockQuote
	</BlockQuote>
</div>)
```

## marginInlineEnd
The margin-inline-end CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction, and text-orientation.

```tsx
import React from 'react'
import { BlockQuote } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<BlockQuote marginInlineEnd="size0">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineEnd="size50">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineEnd="size100">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineEnd="size150">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineEnd="size200">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineEnd="size250">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineEnd="size300">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineEnd="size350">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineEnd="size400">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineEnd="size450">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineEnd="size500">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineEnd="size550">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineEnd="size600">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineEnd="size700">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineEnd="size800">
		BlockQuote
	</BlockQuote>
</div>)
```

## marginInlineStart
The margin-inline-start CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the margin-top, margin-right, margin-bottom, or margin-left property depending on the values defined for writing-mode, direction, and text-orientation.

```tsx
import React from 'react'
import { BlockQuote } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<BlockQuote marginInlineStart="size0">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineStart="size50">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineStart="size100">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineStart="size150">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineStart="size200">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineStart="size250">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineStart="size300">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineStart="size350">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineStart="size400">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineStart="size450">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineStart="size500">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineStart="size550">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineStart="size600">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineStart="size700">
		BlockQuote
	</BlockQuote>
	<BlockQuote marginInlineStart="size800">
		BlockQuote
	</BlockQuote>
</div>)
```

## paddingBlockEnd
The padding-block-end CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { BlockQuote } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<BlockQuote paddingBlockEnd="size0">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockEnd="size50">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockEnd="size100">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockEnd="size150">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockEnd="size200">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockEnd="size250">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockEnd="size300">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockEnd="size350">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockEnd="size400">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockEnd="size450">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockEnd="size500">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockEnd="size550">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockEnd="size600">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockEnd="size700">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockEnd="size800">
		BlockQuote
	</BlockQuote>
</div>)
```

## paddingBlockStart
The padding-block-start CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { BlockQuote } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<BlockQuote paddingBlockStart="size0">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockStart="size50">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockStart="size100">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockStart="size150">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockStart="size200">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockStart="size250">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockStart="size300">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockStart="size350">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockStart="size400">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockStart="size450">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockStart="size500">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockStart="size550">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockStart="size600">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockStart="size700">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingBlockStart="size800">
		BlockQuote
	</BlockQuote>
</div>)
```

## paddingInlineEnd
The padding-inline-end CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { BlockQuote } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<BlockQuote paddingInlineEnd="size0">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineEnd="size50">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineEnd="size100">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineEnd="size150">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineEnd="size200">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineEnd="size250">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineEnd="size300">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineEnd="size350">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineEnd="size400">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineEnd="size450">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineEnd="size500">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineEnd="size550">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineEnd="size600">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineEnd="size700">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineEnd="size800">
		BlockQuote
	</BlockQuote>
</div>)
```

## paddingInlineStart
The padding-inline-start CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { BlockQuote } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<BlockQuote paddingInlineStart="size0">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineStart="size50">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineStart="size100">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineStart="size150">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineStart="size200">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineStart="size250">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineStart="size300">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineStart="size350">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineStart="size400">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineStart="size450">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineStart="size500">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineStart="size550">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineStart="size600">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineStart="size700">
		BlockQuote
	</BlockQuote>
	<BlockQuote paddingInlineStart="size800">
		BlockQuote
	</BlockQuote>
</div>)
```
