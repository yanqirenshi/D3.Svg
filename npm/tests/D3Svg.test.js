import D3Svg from "../index.js";

import MockSvgD3Element from './MockSvgD3Element.js';

test('constructor', () => {
    let params = {
        d3_element: new MockSvgD3Element(),
        look: { at: { x:1, y:2 } },
        scale: 3.4,
        w: 50,
        h: 60,
    };

    let obj = new D3Svg(params);

    expect(obj.w()).toBe(50);
    expect(obj.h()).toBe(60);
});
