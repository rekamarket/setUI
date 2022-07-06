---

title: Attention
group:
	title: Text

---

# Attention

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Attention } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Attention color="primary">
		Текст повышенного значения
	</Attention>
	<Attention color="secondary">
		Текст повышенного значения
	</Attention>
	<Attention color="black">
		Текст повышенного значения
	</Attention>
	<Attention color="white">
		Текст повышенного значения
	</Attention>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Attention } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Attention fontSize="none">
		Текст повышенного значения
	</Attention>
	<Attention fontSize="5xs">
		Текст повышенного значения
	</Attention>
	<Attention fontSize="4xs">
		Текст повышенного значения
	</Attention>
	<Attention fontSize="3xs">
		Текст повышенного значения
	</Attention>
	<Attention fontSize="2xs">
		Текст повышенного значения
	</Attention>
	<Attention fontSize="xs">
		Текст повышенного значения
	</Attention>
	<Attention fontSize="s">
		Текст повышенного значения
	</Attention>
	<Attention fontSize="m">
		Текст повышенного значения
	</Attention>
	<Attention fontSize="l">
		Текст повышенного значения
	</Attention>
	<Attention fontSize="xl">
		Текст повышенного значения
	</Attention>
	<Attention fontSize="2xl">
		Текст повышенного значения
	</Attention>
	<Attention fontSize="3xl">
		Текст повышенного значения
	</Attention>
	<Attention fontSize="4xl">
		Текст повышенного значения
	</Attention>
	<Attention fontSize="5xl">
		Текст повышенного значения
	</Attention>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Attention } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Attention fontWeight="regular">
		Текст повышенного значения
	</Attention>
	<Attention fontWeight="semiBold">
		Текст повышенного значения
	</Attention>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Attention } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Attention textTransform="none">
		Текст повышенного значения
	</Attention>
	<Attention textTransform="uppercase">
		Текст повышенного значения
	</Attention>
	<Attention textTransform="lowercase">
		Текст повышенного значения
	</Attention>
	<Attention textTransform="capitalize">
		Текст повышенного значения
	</Attention>
</div>)
```
