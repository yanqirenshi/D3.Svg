import D3Svg from "../src/index.js";

import MockSvgD3Element from './MockSvgD3Element.js';

test('constructor', () => {
    let params = {
        d3: {},
        svg: new MockSvgD3Element(),
        x: 1,
        y: 2,
        w: 30,
        h: 40,
        scale: 5.6
    };

    let obj = new D3Svg(params);

    expect(obj.x()).toBe(1);
    expect(obj.y()).toBe(2);
    expect(obj.w()).toBe(30);
    expect(obj.h()).toBe(40);
    expect(obj.scale()).toBe(5.6);
});
