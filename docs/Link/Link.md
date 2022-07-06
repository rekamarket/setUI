---

title: Link


---

# Link

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Link } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Link color="primary" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link color="secondary" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link color="black" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link color="white" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Link } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Link fontSize="none" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link fontSize="5xs" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link fontSize="4xs" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link fontSize="3xs" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link fontSize="2xs" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link fontSize="xs" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link fontSize="s" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link fontSize="m" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link fontSize="l" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link fontSize="xl" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link fontSize="2xl" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link fontSize="3xl" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link fontSize="4xl" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link fontSize="5xl" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Link } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Link fontWeight="regular" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link fontWeight="semiBold" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
</div>)
```

## textDecorationColor
The text-decoration-color CSS property sets the color of decorations added to text by text-decoration-line. The color applies to decorations, such as underlines, overlines, strikethroughs, and wavy lines like those used to mark misspellings, in the scope of the property's value.

```tsx
import React from 'react'
import { Link } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Link textDecorationColor="currentColor" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link textDecorationColor="primary" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link textDecorationColor="secondary" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link textDecorationColor="black" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link textDecorationColor="white" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
</div>)
```

## textDecorationLine
The text-decoration-line CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.

```tsx
import React from 'react'
import { Link } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Link textDecorationLine="none" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link textDecorationLine="underline" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link textDecorationLine="overline" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link textDecorationLine="lineThrough" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
</div>)
```

## textDecorationStyle
The text-decoration-style CSS property sets the style of the lines specified by text-decoration-line. The style applies to all lines that are set with text-decoration-line.

```tsx
import React from 'react'
import { Link } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Link textDecorationStyle="solid" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link textDecorationStyle="initial" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
</div>)
```

## textDecorationThickness
The text-decoration-thickness CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.

```tsx
import React from 'react'
import { Link } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Link textDecorationThickness="thin" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link textDecorationThickness="bold" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link textDecorationThickness="initial" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
</div>)
```

## textTransform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.

```tsx
import React from 'react'
import { Link } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Link textTransform="none" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link textTransform="uppercase" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link textTransform="lowercase" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
	<Link textTransform="capitalize" href="https://sberbusiness.ru">
		Инлайновая ссылка
	</Link>
</div>)
```
