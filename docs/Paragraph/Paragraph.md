---

title: Paragraph


---

# Paragraph

## Semantics
Значение по умолчанию - p; Можно переопределить как div

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph tag="div">
		Paragraph content
	</Paragraph>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph color="primary">
		Paragraph content
	</Paragraph>
	<Paragraph color="secondary">
		Paragraph content
	</Paragraph>
	<Paragraph color="black">
		Paragraph content
	</Paragraph>
	<Paragraph color="white">
		Paragraph content
	</Paragraph>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph fontSize="none">
		Paragraph content
	</Paragraph>
	<Paragraph fontSize="5xs">
		Paragraph content
	</Paragraph>
	<Paragraph fontSize="4xs">
		Paragraph content
	</Paragraph>
	<Paragraph fontSize="3xs">
		Paragraph content
	</Paragraph>
	<Paragraph fontSize="2xs">
		Paragraph content
	</Paragraph>
	<Paragraph fontSize="xs">
		Paragraph content
	</Paragraph>
	<Paragraph fontSize="s">
		Paragraph content
	</Paragraph>
	<Paragraph fontSize="m">
		Paragraph content
	</Paragraph>
	<Paragraph fontSize="l">
		Paragraph content
	</Paragraph>
	<Paragraph fontSize="xl">
		Paragraph content
	</Paragraph>
	<Paragraph fontSize="2xl">
		Paragraph content
	</Paragraph>
	<Paragraph fontSize="3xl">
		Paragraph content
	</Paragraph>
	<Paragraph fontSize="4xl">
		Paragraph content
	</Paragraph>
	<Paragraph fontSize="5xl">
		Paragraph content
	</Paragraph>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph fontWeight="regular">
		Paragraph content
	</Paragraph>
	<Paragraph fontWeight="semiBold">
		Paragraph content
	</Paragraph>
</div>)
```

## marginBlockEnd
The margin-block-end CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph marginBlockEnd="size0">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockEnd="size50">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockEnd="size100">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockEnd="size150">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockEnd="size200">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockEnd="size250">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockEnd="size300">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockEnd="size350">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockEnd="size400">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockEnd="size450">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockEnd="size500">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockEnd="size550">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockEnd="size600">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockEnd="size700">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockEnd="size800">
		Paragraph content
	</Paragraph>
</div>)
```

## marginBlockStart
The margin-block-start CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph marginBlockStart="size0">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockStart="size50">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockStart="size100">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockStart="size150">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockStart="size200">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockStart="size250">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockStart="size300">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockStart="size350">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockStart="size400">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockStart="size450">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockStart="size500">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockStart="size550">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockStart="size600">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockStart="size700">
		Paragraph content
	</Paragraph>
	<Paragraph marginBlockStart="size800">
		Paragraph content
	</Paragraph>
</div>)
```

## marginInlineEnd
The margin-inline-end CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction, and text-orientation.

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph marginInlineEnd="size0">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineEnd="size50">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineEnd="size100">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineEnd="size150">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineEnd="size200">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineEnd="size250">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineEnd="size300">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineEnd="size350">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineEnd="size400">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineEnd="size450">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineEnd="size500">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineEnd="size550">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineEnd="size600">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineEnd="size700">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineEnd="size800">
		Paragraph content
	</Paragraph>
</div>)
```

## marginInlineStart
The margin-inline-start CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the margin-top, margin-right, margin-bottom, or margin-left property depending on the values defined for writing-mode, direction, and text-orientation.

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph marginInlineStart="size0">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineStart="size50">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineStart="size100">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineStart="size150">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineStart="size200">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineStart="size250">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineStart="size300">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineStart="size350">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineStart="size400">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineStart="size450">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineStart="size500">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineStart="size550">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineStart="size600">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineStart="size700">
		Paragraph content
	</Paragraph>
	<Paragraph marginInlineStart="size800">
		Paragraph content
	</Paragraph>
</div>)
```

## paddingBlockEnd
The padding-block-end CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph paddingBlockEnd="size0">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockEnd="size50">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockEnd="size100">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockEnd="size150">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockEnd="size200">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockEnd="size250">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockEnd="size300">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockEnd="size350">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockEnd="size400">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockEnd="size450">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockEnd="size500">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockEnd="size550">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockEnd="size600">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockEnd="size700">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockEnd="size800">
		Paragraph content
	</Paragraph>
</div>)
```

## paddingBlockStart
The padding-block-start CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph paddingBlockStart="size0">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockStart="size50">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockStart="size100">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockStart="size150">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockStart="size200">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockStart="size250">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockStart="size300">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockStart="size350">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockStart="size400">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockStart="size450">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockStart="size500">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockStart="size550">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockStart="size600">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockStart="size700">
		Paragraph content
	</Paragraph>
	<Paragraph paddingBlockStart="size800">
		Paragraph content
	</Paragraph>
</div>)
```

## paddingInlineEnd
The padding-inline-end CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph paddingInlineEnd="size0">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineEnd="size50">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineEnd="size100">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineEnd="size150">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineEnd="size200">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineEnd="size250">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineEnd="size300">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineEnd="size350">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineEnd="size400">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineEnd="size450">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineEnd="size500">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineEnd="size550">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineEnd="size600">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineEnd="size700">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineEnd="size800">
		Paragraph content
	</Paragraph>
</div>)
```

## paddingInlineStart
The padding-inline-start CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.

```tsx
import React from 'react'
import { Paragraph } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Paragraph paddingInlineStart="size0">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineStart="size50">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineStart="size100">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineStart="size150">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineStart="size200">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineStart="size250">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineStart="size300">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineStart="size350">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineStart="size400">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineStart="size450">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineStart="size500">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineStart="size550">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineStart="size600">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineStart="size700">
		Paragraph content
	</Paragraph>
	<Paragraph paddingInlineStart="size800">
		Paragraph content
	</Paragraph>
</div>)
```
