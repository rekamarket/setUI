---

title: Disclaimer
group:
	title: Text

---

# Disclaimer

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Disclaimer } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Disclaimer color="primary">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer color="secondary">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer color="black">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer color="white">
		Текст пониженной значимости, дисклеймер
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
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer fontSize="5xs">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer fontSize="4xs">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer fontSize="3xs">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer fontSize="2xs">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer fontSize="xs">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer fontSize="s">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer fontSize="m">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer fontSize="l">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer fontSize="xl">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer fontSize="2xl">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer fontSize="3xl">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer fontSize="4xl">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer fontSize="5xl">
		Текст пониженной значимости, дисклеймер
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
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer fontWeight="semiBold">
		Текст пониженной значимости, дисклеймер
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
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer textTransform="uppercase">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer textTransform="lowercase">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
	<Disclaimer textTransform="capitalize">
		Текст пониженной значимости, дисклеймер
	</Disclaimer>
</div>)
```
