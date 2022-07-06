---

title: Heading


---

# Heading

## Semantics
Можно указать уровни - ["1", "2", "3", "4", "5", "6"]

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading level={1}>
		Заголовок
	</Heading>
	<Heading level={2}>
		Заголовок
	</Heading>
	<Heading level={3}>
		Заголовок
	</Heading>
	<Heading level={4}>
		Заголовок
	</Heading>
	<Heading level={5}>
		Заголовок
	</Heading>
	<Heading level={6}>
		Заголовок
	</Heading>
</div>)
```

## color
The color CSS property sets the foreground color value of an element's text and text decorations, and sets the <currentcolor> value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading color="primary" level={1}>
		Заголовок
	</Heading>
	<Heading color="secondary" level={1}>
		Заголовок
	</Heading>
	<Heading color="black" level={1}>
		Заголовок
	</Heading>
	<Heading color="white" level={1}>
		Заголовок
	</Heading>
</div>)
```

## fontSize
The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading fontSize="none" level={1}>
		Заголовок
	</Heading>
	<Heading fontSize="5xs" level={1}>
		Заголовок
	</Heading>
	<Heading fontSize="4xs" level={1}>
		Заголовок
	</Heading>
	<Heading fontSize="3xs" level={1}>
		Заголовок
	</Heading>
	<Heading fontSize="2xs" level={1}>
		Заголовок
	</Heading>
	<Heading fontSize="xs" level={1}>
		Заголовок
	</Heading>
	<Heading fontSize="s" level={1}>
		Заголовок
	</Heading>
	<Heading fontSize="m" level={1}>
		Заголовок
	</Heading>
	<Heading fontSize="l" level={1}>
		Заголовок
	</Heading>
	<Heading fontSize="xl" level={1}>
		Заголовок
	</Heading>
	<Heading fontSize="2xl" level={1}>
		Заголовок
	</Heading>
	<Heading fontSize="3xl" level={1}>
		Заголовок
	</Heading>
	<Heading fontSize="4xl" level={1}>
		Заголовок
	</Heading>
	<Heading fontSize="5xl" level={1}>
		Заголовок
	</Heading>
</div>)
```

## fontWeight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.

```tsx
import React from 'react'
import { Heading } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Heading fontWeight="regular" level={1}>
		Заголовок
	</Heading>
	<Heading fontWeight="semiBold" level={1}>
		Заголовок
	</Heading>
</div>)
```
