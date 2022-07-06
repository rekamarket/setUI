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
	<Time tag="span" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Time } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Time color="primary" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time color="secondary" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time color="black" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time color="white" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Time } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Time fontSize="none" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time fontSize="5xs" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time fontSize="4xs" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time fontSize="3xs" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time fontSize="2xs" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time fontSize="xs" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time fontSize="s" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time fontSize="m" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time fontSize="l" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time fontSize="xl" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time fontSize="2xl" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time fontSize="3xl" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time fontSize="4xl" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time fontSize="5xl" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Time } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Time fontWeight="regular" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time fontWeight="semiBold" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Time } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Time textTransform="none" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time textTransform="uppercase" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time textTransform="lowercase" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
	<Time textTransform="capitalize" dateTime="2018-07-07T20:00:00">
		20:00
	</Time>
</div>)
```
