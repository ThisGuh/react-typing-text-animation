# react-typing-text-animation

> Simple typing text animation in React component

[![NPM](https://img.shields.io/npm/v/react-typing-text-animation.svg)](https://www.npmjs.com/package/react-typing-text-animation)

## Install

```bash

npm install react-typing-text-animation

```

## Usage

```jsx
import TypingTextAnimation from 'react-typing-text-animation'

import 'react-typing-text-animation/dist/index.css' // only if you're using default cursor

function Example() {
  return <TypingTextAnimation text='example' />
}
```

## API

|      Property      |                 Type                  |     Default      | Required |
| :----------------: | :-----------------------------------: | :--------------: | :------: |
|        text        |                string                 |        ""        |   yes    |
|     className      |                string                 |        ""        |    no    |
|       delay        |              number (ms)              |       200        |    no    |
|   cursorDuration   | string (css animation-duration value) |       "1s"       |    no    |
|      reverse       |                 bool                  |      false       |    no    |
|   delayOnReverse   |              number (ms)              |        50        |    no    |
| brakeBeforeReverse |              number (ms)              |       2500       |    no    |
|       cursor       |             React Element             | cursor component |    no    |

## License

MIT © [ThisGuh](https://github.com/ThisGuh)
