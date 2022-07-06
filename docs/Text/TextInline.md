---

title: TextInline
group:
	title: Text

---

# TextInline

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { TextInline } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<TextInline color="primary">
		Строчный текст
	</TextInline>
	<TextInline color="secondary">
		Строчный текст
	</TextInline>
	<TextInline color="black">
		Строчный текст
	</TextInline>
	<TextInline color="white">
		Строчный текст
	</TextInline>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { TextInline } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<TextInline fontSize="none">
		Строчный текст
	</TextInline>
	<TextInline fontSize="5xs">
		Строчный текст
	</TextInline>
	<TextInline fontSize="4xs">
		Строчный текст
	</TextInline>
	<TextInline fontSize="3xs">
		Строчный текст
	</TextInline>
	<TextInline fontSize="2xs">
		Строчный текст
	</TextInline>
	<TextInline fontSize="xs">
		Строчный текст
	</TextInline>
	<TextInline fontSize="s">
		Строчный текст
	</TextInline>
	<TextInline fontSize="m">
		Строчный текст
	</TextInline>
	<TextInline fontSize="l">
		Строчный текст
	</TextInline>
	<TextInline fontSize="xl">
		Строчный текст
	</TextInline>
	<TextInline fontSize="2xl">
		Строчный текст
	</TextInline>
	<TextInline fontSize="3xl">
		Строчный текст
	</TextInline>
	<TextInline fontSize="4xl">
		Строчный текст
	</TextInline>
	<TextInline fontSize="5xl">
		Строчный текст
	</TextInline>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { TextInline } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<TextInline fontWeight="regular">
		Строчный текст
	</TextInline>
	<TextInline fontWeight="semiBold">
		Строчный текст
	</TextInline>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { TextInline } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<TextInline textTransform="none">
		Строчный текст
	</TextInline>
	<TextInline textTransform="uppercase">
		Строчный текст
	</TextInline>
	<TextInline textTransform="lowercase">
		Строчный текст
	</TextInline>
	<TextInline textTransform="capitalize">
		Строчный текст
	</TextInline>
</div>)
```
