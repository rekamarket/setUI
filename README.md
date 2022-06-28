# [sber-business-ui](https://voluble-toffee-de79ba.netlify.app)
Interactive sandbox - [Playroom](https://voluble-toffee-de79ba.netlify.app)

## Documentation
https://rekamarket.github.io/sber-business-ui/

## Usage

Import styles

File: `App.js`

```js
import '@rekamarket/sber-business-ui/package/index.gen.css';
import { Limit } from '@rekamarket/sber-business-ui';

<Limit limit={1000000} />
```

## Getting Started 

Install dependencies,

```bash
$ yarn install
```

Compile rescript,

```bash
$ yarn rescript
```

Build documentation,

```bash
$ yarn dumi
```

Publish documentation via Github Pages,

```bash
$ yarn dumi:publish
```

## Interactive Playground

```bash
$ yarn install && yarn playroom
```

https://voluble-toffee-de79ba.netlify.app
