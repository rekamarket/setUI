---

title: Data
group:
	title: Text

---

# Data

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Data } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Data color="primary">
		Аббревиатура
	</Data>
	<Data color="secondary">
		Аббревиатура
	</Data>
	<Data color="black">
		Аббревиатура
	</Data>
	<Data color="white">
		Аббревиатура
	</Data>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Data } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Data fontSize="none">
		Аббревиатура
	</Data>
	<Data fontSize="5xs">
		Аббревиатура
	</Data>
	<Data fontSize="4xs">
		Аббревиатура
	</Data>
	<Data fontSize="3xs">
		Аббревиатура
	</Data>
	<Data fontSize="2xs">
		Аббревиатура
	</Data>
	<Data fontSize="xs">
		Аббревиатура
	</Data>
	<Data fontSize="s">
		Аббревиатура
	</Data>
	<Data fontSize="m">
		Аббревиатура
	</Data>
	<Data fontSize="l">
		Аббревиатура
	</Data>
	<Data fontSize="xl">
		Аббревиатура
	</Data>
	<Data fontSize="2xl">
		Аббревиатура
	</Data>
	<Data fontSize="3xl">
		Аббревиатура
	</Data>
	<Data fontSize="4xl">
		Аббревиатура
	</Data>
	<Data fontSize="5xl">
		Аббревиатура
	</Data>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Data } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Data fontWeight="regular">
		Аббревиатура
	</Data>
	<Data fontWeight="semiBold">
		Аббревиатура
	</Data>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Data } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Data textTransform="none">
		Аббревиатура
	</Data>
	<Data textTransform="uppercase">
		Аббревиатура
	</Data>
	<Data textTransform="lowercase">
		Аббревиатура
	</Data>
	<Data textTransform="capitalize">
		Аббревиатура
	</Data>
</div>)
```
