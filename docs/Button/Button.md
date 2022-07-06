---

title: Button


---

# Button

## size

```tsx
import React from 'react'
import { Button } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Button size="s">
		Кнопка
	</Button>
	<Button size="s">
		Кнопка
	</Button>
	<Button size="m">
		Кнопка
	</Button>
	<Button size="l">
		Кнопка
	</Button>
	<Button size="xl">
		Кнопка
	</Button>
</div>)
```

## variant

```tsx
import React from 'react'
import { Button } from '@rekamarket/sber-business-ui'

export default () => (<div style={{ display: "grid", gap: 10 }}>
	<Button variant="solid">
		Кнопка
	</Button>
	<Button variant="ghost">
		Кнопка
	</Button>
	<Button variant="soft">
		Кнопка
	</Button>
	<Button variant="text">
		Кнопка
	</Button>
</div>)
```
