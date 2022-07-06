---

title: ButtonLink


---

# ButtonLink

## color

```tsx
import React from 'react'
import { ButtonLink } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<ButtonLink color="blue" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink color="gray" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
</div>)
```

## size

```tsx
import React from 'react'
import { ButtonLink } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<ButtonLink size="s" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink size="s" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink size="m" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink size="l" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink size="xl" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
</div>)
```

## variant

```tsx
import React from 'react'
import { ButtonLink } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<ButtonLink variant="solid" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink variant="ghost" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink variant="soft" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink variant="text" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
</div>)
```

## justifySelf
The CSS justify-self property sets the way a box is justified inside its alignment container along the appropriate axis.

```tsx
import React from 'react'
import { ButtonLink } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<ButtonLink justifySelf="auto" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink justifySelf="normal" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink justifySelf="stretch" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink justifySelf="center" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink justifySelf="start" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink justifySelf="end" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink justifySelf="baseline" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
</div>)
```

## inlineSize
The inline-size CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the width or the height property, depending on the value of writing-mode. If the writing mode is vertically oriented, the value of inline-size relates to the height of the element; otherwise, it relates to the width of the element. A related property is block-size, which defines the other dimension of the element.

```tsx
import React from 'react'
import { ButtonLink } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<ButtonLink inlineSize="maxContent" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink inlineSize="minContent" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink inlineSize="fitContent" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink inlineSize="auto" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink inlineSize="fillAvailable" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { ButtonLink } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<ButtonLink textTransform="none" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink textTransform="uppercase" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink textTransform="lowercase" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
	<ButtonLink textTransform="capitalize" href="https://sberbusiness.ru">
		Click
	</ButtonLink>
</div>)
```
