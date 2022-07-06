---

title: Idiomatic
group:
	title: Text

---

# Idiomatic

## Semantics
Значение по умолчанию - i; Можно указать теги - ["abbr", "b", "data", "dd", "dt", "small", "span", "strong"]

```tsx
import React from 'react'
import { Idiomatic } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Idiomatic tag="abbr">
		Idiomatic
	</Idiomatic>
	<Idiomatic tag="b">
		Idiomatic
	</Idiomatic>
	<Idiomatic tag="data">
		Idiomatic
	</Idiomatic>
	<Idiomatic tag="dd">
		Idiomatic
	</Idiomatic>
	<Idiomatic tag="dt">
		Idiomatic
	</Idiomatic>
	<Idiomatic tag="small">
		Idiomatic
	</Idiomatic>
	<Idiomatic tag="span">
		Idiomatic
	</Idiomatic>
	<Idiomatic tag="strong">
		Idiomatic
	</Idiomatic>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Idiomatic } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Idiomatic color="primary">
		Idiomatic
	</Idiomatic>
	<Idiomatic color="secondary">
		Idiomatic
	</Idiomatic>
	<Idiomatic color="black">
		Idiomatic
	</Idiomatic>
	<Idiomatic color="white">
		Idiomatic
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
		Idiomatic
	</Idiomatic>
	<Idiomatic fontSize="5xs">
		Idiomatic
	</Idiomatic>
	<Idiomatic fontSize="4xs">
		Idiomatic
	</Idiomatic>
	<Idiomatic fontSize="3xs">
		Idiomatic
	</Idiomatic>
	<Idiomatic fontSize="2xs">
		Idiomatic
	</Idiomatic>
	<Idiomatic fontSize="xs">
		Idiomatic
	</Idiomatic>
	<Idiomatic fontSize="s">
		Idiomatic
	</Idiomatic>
	<Idiomatic fontSize="m">
		Idiomatic
	</Idiomatic>
	<Idiomatic fontSize="l">
		Idiomatic
	</Idiomatic>
	<Idiomatic fontSize="xl">
		Idiomatic
	</Idiomatic>
	<Idiomatic fontSize="2xl">
		Idiomatic
	</Idiomatic>
	<Idiomatic fontSize="3xl">
		Idiomatic
	</Idiomatic>
	<Idiomatic fontSize="4xl">
		Idiomatic
	</Idiomatic>
	<Idiomatic fontSize="5xl">
		Idiomatic
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
		Idiomatic
	</Idiomatic>
	<Idiomatic fontWeight="semiBold">
		Idiomatic
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
		Idiomatic
	</Idiomatic>
	<Idiomatic textTransform="uppercase">
		Idiomatic
	</Idiomatic>
	<Idiomatic textTransform="lowercase">
		Idiomatic
	</Idiomatic>
	<Idiomatic textTransform="capitalize">
		Idiomatic
	</Idiomatic>
</div>)
```
