---

title: Important
group:
	title: Text

---

# Important

## Semantics
Значение по умолчанию - strong; Можно указать теги - ["abbr", "b", "data", "dd", "dt", "i", "small", "span"]

```tsx
import React from 'react'
import { Important } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Important tag="abbr">
		Important
	</Important>
	<Important tag="b">
		Important
	</Important>
	<Important tag="data">
		Important
	</Important>
	<Important tag="dd">
		Important
	</Important>
	<Important tag="dt">
		Important
	</Important>
	<Important tag="i">
		Important
	</Important>
	<Important tag="small">
		Important
	</Important>
	<Important tag="span">
		Important
	</Important>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Important } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Important color="primary">
		Important
	</Important>
	<Important color="secondary">
		Important
	</Important>
	<Important color="black">
		Important
	</Important>
	<Important color="white">
		Important
	</Important>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Important } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Important fontSize="none">
		Important
	</Important>
	<Important fontSize="5xs">
		Important
	</Important>
	<Important fontSize="4xs">
		Important
	</Important>
	<Important fontSize="3xs">
		Important
	</Important>
	<Important fontSize="2xs">
		Important
	</Important>
	<Important fontSize="xs">
		Important
	</Important>
	<Important fontSize="s">
		Important
	</Important>
	<Important fontSize="m">
		Important
	</Important>
	<Important fontSize="l">
		Important
	</Important>
	<Important fontSize="xl">
		Important
	</Important>
	<Important fontSize="2xl">
		Important
	</Important>
	<Important fontSize="3xl">
		Important
	</Important>
	<Important fontSize="4xl">
		Important
	</Important>
	<Important fontSize="5xl">
		Important
	</Important>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Important } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Important fontWeight="regular">
		Important
	</Important>
	<Important fontWeight="semiBold">
		Important
	</Important>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Important } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Important textTransform="none">
		Important
	</Important>
	<Important textTransform="uppercase">
		Important
	</Important>
	<Important textTransform="lowercase">
		Important
	</Important>
	<Important textTransform="capitalize">
		Important
	</Important>
</div>)
```
