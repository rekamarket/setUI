---

title: Idiomatic
group:
	title: Text

---

# Idiomatic

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Idiomatic } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Idiomatic color="primary">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic color="secondary">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic color="black">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic color="white">
		Термин или выделение текста
	</Idiomatic>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Idiomatic } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Idiomatic fontSize="none">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic fontSize="5xs">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic fontSize="4xs">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic fontSize="3xs">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic fontSize="2xs">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic fontSize="xs">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic fontSize="s">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic fontSize="m">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic fontSize="l">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic fontSize="xl">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic fontSize="2xl">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic fontSize="3xl">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic fontSize="4xl">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic fontSize="5xl">
		Термин или выделение текста
	</Idiomatic>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Idiomatic } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Idiomatic fontWeight="regular">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic fontWeight="semiBold">
		Термин или выделение текста
	</Idiomatic>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Idiomatic } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Idiomatic textTransform="none">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic textTransform="uppercase">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic textTransform="lowercase">
		Термин или выделение текста
	</Idiomatic>
	<Idiomatic textTransform="capitalize">
		Термин или выделение текста
	</Idiomatic>
</div>)
```
