# D3.Svg

- [Github](https://github.com/yanqirenshi/D3.Svg)
- [npm](https://www.npmjs.com/package/@yanqirenshi/d3.svg)

## Install

```
npm i @yanqirenshi/d3.svg
```

## Usage

```
import D3Svg from '@yanqirenshi/d3.svg'

    let params = {
        svg:  {...},
        x: 1,
        y: 2,
        w: 30,
        h: 40,
        scale: 5.6
    };

new D3Svg().init(params);
```

### Load js file.

```html
<!DOCTYPE html>
<html style="overflow:hidden;">
    <head>
        <script src="./libs/d3.js"></script>
        <script src="./libs/d3-svg.js"></script>
    </head>
    <body>
        <app>
            <stage></stage>
        </app>
    </body>
</html>

```

### Make D3Svg instance.

```html
<!-- ------------------- -->
<!-- Example for Riot.js -->
<!-- ------------------- -->
<stage ref="self">
    <svg ref="svg-tag"></svg>

    <script>
     this.d3svg = null;

     this.on('mount', () => {
         this.d3svg = new D3Svg({
             d3: d3,
             svg: d3.select("stage svg"),
             x: 0,
             y: 0,
             w: this.refs.self.clientWidth,
             h: this.refs.self.clientHeight,
             scale: 1
         });
     });
    </script>
</stage>
```

### Svg

```html
// Get
this.d3svg.Svg();

// Set
this.d3svg.Svg(d3.select("stage svg"));
```

## Dependencies

- [D3.js](https://d3js.org/)
- [Jest](https://jestjs.io/)

## Author

+ Satoshi Iwasaki (yanqirenshi@gmail.com)

# Copyright

Copyright (c) 2014 Satoshi Iwasaki (yanqirenshi@gmail.com)

# License

MIT
