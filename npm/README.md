# D3.Svg

- [Github](https://github.com/yanqirenshi/D3.Svg)
- [npm](https://www.npmjs.com/package/@yanqirenshi/d3.svg)

## Install

```
npm i @yanqirenshi/d3.svg
```

## Usage (React)

Import libs.

```
import * as d3 from 'd3';
import D3Svg from '@yanqirenshi/d3.svg';
```

make instance.

```
let svg = new D3Svg({
    d3_element: d3.select('........'),
    look: {
        at: { x:0, y:0 },
    },
    scale: 2,
});
```

## Dependencies

- [D3.js](https://d3js.org/)
- [Jest](https://jestjs.io/)

## Author

+ Satoshi Iwasaki (yanqirenshi@gmail.com)

# Copyright

Copyright (c) 2020 Satoshi Iwasaki (yanqirenshi@gmail.com)

# License

MIT
