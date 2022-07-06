---

title: Heading


---

# Heading

## Semantics
Можно указать уровни - ["1", "2", "3", "4", "5", "6"]

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading level={1}>
		Heading content
	</Heading>
	<Heading level={2}>
		Heading content
	</Heading>
	<Heading level={3}>
		Heading content
	</Heading>
	<Heading level={4}>
		Heading content
	</Heading>
	<Heading level={5}>
		Heading content
	</Heading>
	<Heading level={6}>
		Heading content
	</Heading>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading color="primary" level={1}>
		Heading content
	</Heading>
	<Heading color="secondary" level={1}>
		Heading content
	</Heading>
	<Heading color="black" level={1}>
		Heading content
	</Heading>
	<Heading color="white" level={1}>
		Heading content
	</Heading>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading fontSize="none" level={1}>
		Heading content
	</Heading>
	<Heading fontSize="5xs" level={1}>
		Heading content
	</Heading>
	<Heading fontSize="4xs" level={1}>
		Heading content
	</Heading>
	<Heading fontSize="3xs" level={1}>
		Heading content
	</Heading>
	<Heading fontSize="2xs" level={1}>
		Heading content
	</Heading>
	<Heading fontSize="xs" level={1}>
		Heading content
	</Heading>
	<Heading fontSize="s" level={1}>
		Heading content
	</Heading>
	<Heading fontSize="m" level={1}>
		Heading content
	</Heading>
	<Heading fontSize="l" level={1}>
		Heading content
	</Heading>
	<Heading fontSize="xl" level={1}>
		Heading content
	</Heading>
	<Heading fontSize="2xl" level={1}>
		Heading content
	</Heading>
	<Heading fontSize="3xl" level={1}>
		Heading content
	</Heading>
	<Heading fontSize="4xl" level={1}>
		Heading content
	</Heading>
	<Heading fontSize="5xl" level={1}>
		Heading content
	</Heading>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading fontWeight="regular" level={1}>
		Heading content
	</Heading>
	<Heading fontWeight="semiBold" level={1}>
		Heading content
	</Heading>
</div>)
```

## textAlign

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading textAlign="center" level={1}>
		Heading content
	</Heading>
	<Heading textAlign="start" level={1}>
		Heading content
	</Heading>
	<Heading textAlign="end" level={1}>
		Heading content
	</Heading>
	<Heading textAlign="initial" level={1}>
		Heading content
	</Heading>
</div>)
```

## marginBlockEnd
The margin-block-end CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading marginBlockEnd="size0" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockEnd="size50" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockEnd="size100" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockEnd="size150" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockEnd="size200" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockEnd="size250" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockEnd="size300" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockEnd="size350" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockEnd="size400" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockEnd="size450" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockEnd="size500" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockEnd="size550" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockEnd="size600" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockEnd="size700" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockEnd="size800" level={1}>
		Heading content
	</Heading>
</div>)
```

## marginBlockStart
The margin-block-start CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading marginBlockStart="size0" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockStart="size50" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockStart="size100" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockStart="size150" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockStart="size200" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockStart="size250" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockStart="size300" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockStart="size350" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockStart="size400" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockStart="size450" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockStart="size500" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockStart="size550" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockStart="size600" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockStart="size700" level={1}>
		Heading content
	</Heading>
	<Heading marginBlockStart="size800" level={1}>
		Heading content
	</Heading>
</div>)
```

## marginInlineEnd
The margin-inline-end CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction, and text-orientation.

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading marginInlineEnd="size0" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineEnd="size50" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineEnd="size100" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineEnd="size150" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineEnd="size200" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineEnd="size250" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineEnd="size300" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineEnd="size350" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineEnd="size400" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineEnd="size450" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineEnd="size500" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineEnd="size550" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineEnd="size600" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineEnd="size700" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineEnd="size800" level={1}>
		Heading content
	</Heading>
</div>)
```

## marginInlineStart
The margin-inline-start CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the margin-top, margin-right, margin-bottom, or margin-left property depending on the values defined for writing-mode, direction, and text-orientation.

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading marginInlineStart="size0" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineStart="size50" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineStart="size100" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineStart="size150" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineStart="size200" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineStart="size250" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineStart="size300" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineStart="size350" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineStart="size400" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineStart="size450" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineStart="size500" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineStart="size550" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineStart="size600" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineStart="size700" level={1}>
		Heading content
	</Heading>
	<Heading marginInlineStart="size800" level={1}>
		Heading content
	</Heading>
</div>)
```

## paddingBlockEnd
The padding-block-end CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading paddingBlockEnd="size0" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockEnd="size50" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockEnd="size100" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockEnd="size150" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockEnd="size200" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockEnd="size250" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockEnd="size300" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockEnd="size350" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockEnd="size400" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockEnd="size450" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockEnd="size500" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockEnd="size550" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockEnd="size600" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockEnd="size700" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockEnd="size800" level={1}>
		Heading content
	</Heading>
</div>)
```

## paddingBlockStart
The padding-block-start CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading paddingBlockStart="size0" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockStart="size50" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockStart="size100" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockStart="size150" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockStart="size200" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockStart="size250" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockStart="size300" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockStart="size350" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockStart="size400" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockStart="size450" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockStart="size500" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockStart="size550" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockStart="size600" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockStart="size700" level={1}>
		Heading content
	</Heading>
	<Heading paddingBlockStart="size800" level={1}>
		Heading content
	</Heading>
</div>)
```

## paddingInlineEnd
The padding-inline-end CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading paddingInlineEnd="size0" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineEnd="size50" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineEnd="size100" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineEnd="size150" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineEnd="size200" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineEnd="size250" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineEnd="size300" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineEnd="size350" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineEnd="size400" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineEnd="size450" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineEnd="size500" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineEnd="size550" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineEnd="size600" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineEnd="size700" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineEnd="size800" level={1}>
		Heading content
	</Heading>
</div>)
```

## paddingInlineStart
The padding-inline-start CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading paddingInlineStart="size0" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineStart="size50" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineStart="size100" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineStart="size150" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineStart="size200" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineStart="size250" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineStart="size300" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineStart="size350" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineStart="size400" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineStart="size450" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineStart="size500" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineStart="size550" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineStart="size600" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineStart="size700" level={1}>
		Heading content
	</Heading>
	<Heading paddingInlineStart="size800" level={1}>
		Heading content
	</Heading>
</div>)
```
