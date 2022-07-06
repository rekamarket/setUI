---

title: Data
group:
	title: Text

---

# Data

## Semantics
Значение по умолчанию - data; Можно указать теги - ["abbr", "b", "dd", "dt", "i", "small", "span", "strong"]

```tsx
import React from 'react'
import { Data } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Data tag="abbr">
		Data
	</Data>
	<Data tag="b">
		Data
	</Data>
	<Data tag="dd">
		Data
	</Data>
	<Data tag="dt">
		Data
	</Data>
	<Data tag="i">
		Data
	</Data>
	<Data tag="small">
		Data
	</Data>
	<Data tag="span">
		Data
	</Data>
	<Data tag="strong">
		Data
	</Data>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Data } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Data color="primary">
		Data
	</Data>
	<Data color="secondary">
		Data
	</Data>
	<Data color="black">
		Data
	</Data>
	<Data color="white">
		Data
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
		Data
	</Data>
	<Data fontSize="5xs">
		Data
	</Data>
	<Data fontSize="4xs">
		Data
	</Data>
	<Data fontSize="3xs">
		Data
	</Data>
	<Data fontSize="2xs">
		Data
	</Data>
	<Data fontSize="xs">
		Data
	</Data>
	<Data fontSize="s">
		Data
	</Data>
	<Data fontSize="m">
		Data
	</Data>
	<Data fontSize="l">
		Data
	</Data>
	<Data fontSize="xl">
		Data
	</Data>
	<Data fontSize="2xl">
		Data
	</Data>
	<Data fontSize="3xl">
		Data
	</Data>
	<Data fontSize="4xl">
		Data
	</Data>
	<Data fontSize="5xl">
		Data
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
		Data
	</Data>
	<Data fontWeight="semiBold">
		Data
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
		Data
	</Data>
	<Data textTransform="uppercase">
		Data
	</Data>
	<Data textTransform="lowercase">
		Data
	</Data>
	<Data textTransform="capitalize">
		Data
	</Data>
</div>)
```
