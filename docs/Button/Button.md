---

title: Button


---

# Button

## color

```tsx
import React from 'react'
import { Button } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Button color="blue">
		Click
	</Button>
	<Button color="gray">
		Click
	</Button>
</div>)
```

## size

```tsx
import React from 'react'
import { Button } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Button size="s">
		Click
	</Button>
	<Button size="s">
		Click
	</Button>
	<Button size="m">
		Click
	</Button>
	<Button size="l">
		Click
	</Button>
	<Button size="xl">
		Click
	</Button>
</div>)
```

## variant

```tsx
import React from 'react'
import { Button } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Button variant="solid">
		Click
	</Button>
	<Button variant="ghost">
		Click
	</Button>
	<Button variant="soft">
		Click
	</Button>
	<Button variant="text">
		Click
	</Button>
</div>)
```

## justifySelf
The CSS justify-self property sets the way a box is justified inside its alignment container along the appropriate axis.

```tsx
import React from 'react'
import { Button } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Button justifySelf="auto">
		Click
	</Button>
	<Button justifySelf="normal">
		Click
	</Button>
	<Button justifySelf="stretch">
		Click
	</Button>
	<Button justifySelf="center">
		Click
	</Button>
	<Button justifySelf="start">
		Click
	</Button>
	<Button justifySelf="end">
		Click
	</Button>
	<Button justifySelf="baseline">
		Click
	</Button>
</div>)
```

## inlineSize
The inline-size CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the width or the height property, depending on the value of writing-mode. If the writing mode is vertically oriented, the value of inline-size relates to the height of the element; otherwise, it relates to the width of the element. A related property is block-size, which defines the other dimension of the element.

```tsx
import React from 'react'
import { Button } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Button inlineSize="maxContent">
		Click
	</Button>
	<Button inlineSize="minContent">
		Click
	</Button>
	<Button inlineSize="fitContent">
		Click
	</Button>
	<Button inlineSize="auto">
		Click
	</Button>
	<Button inlineSize="fillAvailable">
		Click
	</Button>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Button } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Button textTransform="none">
		Click
	</Button>
	<Button textTransform="uppercase">
		Click
	</Button>
	<Button textTransform="lowercase">
		Click
	</Button>
	<Button textTransform="capitalize">
		Click
	</Button>
</div>)
```
