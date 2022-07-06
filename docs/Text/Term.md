---

title: Term
group:
	title: Text

---

# Term

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Term } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Term color="primary">
		Аббревиатура
	</Term>
	<Term color="secondary">
		Аббревиатура
	</Term>
	<Term color="black">
		Аббревиатура
	</Term>
	<Term color="white">
		Аббревиатура
	</Term>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Term } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Term fontSize="none">
		Аббревиатура
	</Term>
	<Term fontSize="5xs">
		Аббревиатура
	</Term>
	<Term fontSize="4xs">
		Аббревиатура
	</Term>
	<Term fontSize="3xs">
		Аббревиатура
	</Term>
	<Term fontSize="2xs">
		Аббревиатура
	</Term>
	<Term fontSize="xs">
		Аббревиатура
	</Term>
	<Term fontSize="s">
		Аббревиатура
	</Term>
	<Term fontSize="m">
		Аббревиатура
	</Term>
	<Term fontSize="l">
		Аббревиатура
	</Term>
	<Term fontSize="xl">
		Аббревиатура
	</Term>
	<Term fontSize="2xl">
		Аббревиатура
	</Term>
	<Term fontSize="3xl">
		Аббревиатура
	</Term>
	<Term fontSize="4xl">
		Аббревиатура
	</Term>
	<Term fontSize="5xl">
		Аббревиатура
	</Term>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Term } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Term fontWeight="regular">
		Аббревиатура
	</Term>
	<Term fontWeight="semiBold">
		Аббревиатура
	</Term>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Term } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Term textTransform="none">
		Аббревиатура
	</Term>
	<Term textTransform="uppercase">
		Аббревиатура
	</Term>
	<Term textTransform="lowercase">
		Аббревиатура
	</Term>
	<Term textTransform="capitalize">
		Аббревиатура
	</Term>
</div>)
```
