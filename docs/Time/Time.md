---

title: Time


---

# Time

## Semantics
Можно указать теги - ["span"]

```tsx
import React from 'react'
import { Time } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Time tag="span">
		Инлайновый текст
	</Time>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Time } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Time color="primary" tag="span">
		Инлайновый текст
	</Time>
	<Time color="secondary" tag="span">
		Инлайновый текст
	</Time>
	<Time color="black" tag="span">
		Инлайновый текст
	</Time>
	<Time color="white" tag="span">
		Инлайновый текст
	</Time>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Time } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Time fontSize="none" tag="span">
		Инлайновый текст
	</Time>
	<Time fontSize="5xs" tag="span">
		Инлайновый текст
	</Time>
	<Time fontSize="4xs" tag="span">
		Инлайновый текст
	</Time>
	<Time fontSize="3xs" tag="span">
		Инлайновый текст
	</Time>
	<Time fontSize="2xs" tag="span">
		Инлайновый текст
	</Time>
	<Time fontSize="xs" tag="span">
		Инлайновый текст
	</Time>
	<Time fontSize="s" tag="span">
		Инлайновый текст
	</Time>
	<Time fontSize="m" tag="span">
		Инлайновый текст
	</Time>
	<Time fontSize="l" tag="span">
		Инлайновый текст
	</Time>
	<Time fontSize="xl" tag="span">
		Инлайновый текст
	</Time>
	<Time fontSize="2xl" tag="span">
		Инлайновый текст
	</Time>
	<Time fontSize="3xl" tag="span">
		Инлайновый текст
	</Time>
	<Time fontSize="4xl" tag="span">
		Инлайновый текст
	</Time>
	<Time fontSize="5xl" tag="span">
		Инлайновый текст
	</Time>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Time } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Time fontWeight="regular" tag="span">
		Инлайновый текст
	</Time>
	<Time fontWeight="semiBold" tag="span">
		Инлайновый текст
	</Time>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Time } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Time textTransform="none" tag="span">
		Инлайновый текст
	</Time>
	<Time textTransform="uppercase" tag="span">
		Инлайновый текст
	</Time>
	<Time textTransform="lowercase" tag="span">
		Инлайновый текст
	</Time>
	<Time textTransform="capitalize" tag="span">
		Инлайновый текст
	</Time>
</div>)
```
