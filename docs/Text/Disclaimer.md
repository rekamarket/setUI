---

title: Disclaimer
group:
	title: Text

---

# Disclaimer

## Semantics
Значение по умолчанию - small; Можно указать теги - ["abbr", "b", "data", "dd", "dt", "i", "span", "strong"]

```tsx
import React from 'react'
import { Disclaimer } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Disclaimer tag="abbr">
		Disclaimer
	</Disclaimer>
	<Disclaimer tag="b">
		Disclaimer
	</Disclaimer>
	<Disclaimer tag="data">
		Disclaimer
	</Disclaimer>
	<Disclaimer tag="dd">
		Disclaimer
	</Disclaimer>
	<Disclaimer tag="dt">
		Disclaimer
	</Disclaimer>
	<Disclaimer tag="i">
		Disclaimer
	</Disclaimer>
	<Disclaimer tag="span">
		Disclaimer
	</Disclaimer>
	<Disclaimer tag="strong">
		Disclaimer
	</Disclaimer>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Disclaimer } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Disclaimer color="primary">
		Disclaimer
	</Disclaimer>
	<Disclaimer color="secondary">
		Disclaimer
	</Disclaimer>
	<Disclaimer color="black">
		Disclaimer
	</Disclaimer>
	<Disclaimer color="white">
		Disclaimer
	</Disclaimer>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Disclaimer } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Disclaimer fontSize="none">
		Disclaimer
	</Disclaimer>
	<Disclaimer fontSize="5xs">
		Disclaimer
	</Disclaimer>
	<Disclaimer fontSize="4xs">
		Disclaimer
	</Disclaimer>
	<Disclaimer fontSize="3xs">
		Disclaimer
	</Disclaimer>
	<Disclaimer fontSize="2xs">
		Disclaimer
	</Disclaimer>
	<Disclaimer fontSize="xs">
		Disclaimer
	</Disclaimer>
	<Disclaimer fontSize="s">
		Disclaimer
	</Disclaimer>
	<Disclaimer fontSize="m">
		Disclaimer
	</Disclaimer>
	<Disclaimer fontSize="l">
		Disclaimer
	</Disclaimer>
	<Disclaimer fontSize="xl">
		Disclaimer
	</Disclaimer>
	<Disclaimer fontSize="2xl">
		Disclaimer
	</Disclaimer>
	<Disclaimer fontSize="3xl">
		Disclaimer
	</Disclaimer>
	<Disclaimer fontSize="4xl">
		Disclaimer
	</Disclaimer>
	<Disclaimer fontSize="5xl">
		Disclaimer
	</Disclaimer>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Disclaimer } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Disclaimer fontWeight="regular">
		Disclaimer
	</Disclaimer>
	<Disclaimer fontWeight="semiBold">
		Disclaimer
	</Disclaimer>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Disclaimer } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Disclaimer textTransform="none">
		Disclaimer
	</Disclaimer>
	<Disclaimer textTransform="uppercase">
		Disclaimer
	</Disclaimer>
	<Disclaimer textTransform="lowercase">
		Disclaimer
	</Disclaimer>
	<Disclaimer textTransform="capitalize">
		Disclaimer
	</Disclaimer>
</div>)
```
