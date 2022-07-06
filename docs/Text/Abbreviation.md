---

title: Abbreviation
group:
	title: Text

---

# Abbreviation

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Abbreviation } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Abbreviation color="primary">
		Аббревиатура
	</Abbreviation>
	<Abbreviation color="secondary">
		Аббревиатура
	</Abbreviation>
	<Abbreviation color="black">
		Аббревиатура
	</Abbreviation>
	<Abbreviation color="white">
		Аббревиатура
	</Abbreviation>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Abbreviation } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Abbreviation fontSize="none">
		Аббревиатура
	</Abbreviation>
	<Abbreviation fontSize="5xs">
		Аббревиатура
	</Abbreviation>
	<Abbreviation fontSize="4xs">
		Аббревиатура
	</Abbreviation>
	<Abbreviation fontSize="3xs">
		Аббревиатура
	</Abbreviation>
	<Abbreviation fontSize="2xs">
		Аббревиатура
	</Abbreviation>
	<Abbreviation fontSize="xs">
		Аббревиатура
	</Abbreviation>
	<Abbreviation fontSize="s">
		Аббревиатура
	</Abbreviation>
	<Abbreviation fontSize="m">
		Аббревиатура
	</Abbreviation>
	<Abbreviation fontSize="l">
		Аббревиатура
	</Abbreviation>
	<Abbreviation fontSize="xl">
		Аббревиатура
	</Abbreviation>
	<Abbreviation fontSize="2xl">
		Аббревиатура
	</Abbreviation>
	<Abbreviation fontSize="3xl">
		Аббревиатура
	</Abbreviation>
	<Abbreviation fontSize="4xl">
		Аббревиатура
	</Abbreviation>
	<Abbreviation fontSize="5xl">
		Аббревиатура
	</Abbreviation>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Abbreviation } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Abbreviation fontWeight="regular">
		Аббревиатура
	</Abbreviation>
	<Abbreviation fontWeight="semiBold">
		Аббревиатура
	</Abbreviation>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Abbreviation } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Abbreviation textTransform="none">
		Аббревиатура
	</Abbreviation>
	<Abbreviation textTransform="uppercase">
		Аббревиатура
	</Abbreviation>
	<Abbreviation textTransform="lowercase">
		Аббревиатура
	</Abbreviation>
	<Abbreviation textTransform="capitalize">
		Аббревиатура
	</Abbreviation>
</div>)
```
