---

title: Important
group:
	title: Text

---

# Important

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Important } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Important color="primary">
		Важный текст
	</Important>
	<Important color="secondary">
		Важный текст
	</Important>
	<Important color="black">
		Важный текст
	</Important>
	<Important color="white">
		Важный текст
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
		Важный текст
	</Important>
	<Important fontSize="5xs">
		Важный текст
	</Important>
	<Important fontSize="4xs">
		Важный текст
	</Important>
	<Important fontSize="3xs">
		Важный текст
	</Important>
	<Important fontSize="2xs">
		Важный текст
	</Important>
	<Important fontSize="xs">
		Важный текст
	</Important>
	<Important fontSize="s">
		Важный текст
	</Important>
	<Important fontSize="m">
		Важный текст
	</Important>
	<Important fontSize="l">
		Важный текст
	</Important>
	<Important fontSize="xl">
		Важный текст
	</Important>
	<Important fontSize="2xl">
		Важный текст
	</Important>
	<Important fontSize="3xl">
		Важный текст
	</Important>
	<Important fontSize="4xl">
		Важный текст
	</Important>
	<Important fontSize="5xl">
		Важный текст
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
		Важный текст
	</Important>
	<Important fontWeight="semiBold">
		Важный текст
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
		Важный текст
	</Important>
	<Important textTransform="uppercase">
		Важный текст
	</Important>
	<Important textTransform="lowercase">
		Важный текст
	</Important>
	<Important textTransform="capitalize">
		Важный текст
	</Important>
</div>)
```
