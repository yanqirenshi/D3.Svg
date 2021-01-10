const d3svg = {
    name: 'D3Svg',
    attributes: [
        { name: '_selector',    type: { name: '???' }, visibility: '-' },
        { name: '_d3_element',  type: { name: '???' }, visibility: '-' },
        { name: '_conditioner', type: { name: '???' }, visibility: '-' },
        { name: '_viewbox',     type: { name: '???' }, visibility: '-' },
        { name: '_callbacks',   type: { name: '???' }, visibility: '-' },
    ],
    methods: [
        {
            type: 'group',
            title: 'setting',
            list: [
                {
                    name: 'settingMove',
                    arguments: [
                        { name: 'd3element' },
                    ],
                    return: 'undefined',
                    visibility: '+'
                },
                {
                    name: 'settingZoom',
                    arguments: [
                        { name: 'd3element' },
                    ],
                    return: 'undefined',
                    visibility: '+'
                },
                {
                    name: 'settingClick',
                    arguments: [
                        { name: 'd3element' },
                    ],
                    return: 'undefined',
                    visibility: '+'
                },
                {
                    name: 'setting',
                    type: { name: '???' },
                    arguments: [],
                    return: 'd3element',
                    visibility: '+'
                },
                {
                    name: 'makeD3Element',
                    arguments: [
                        { name: 'val' },
                    ],
                    return: 'D3 Element',
                    visibility: '+'
                },
            ],
        },
        {
            type: 'group',
            title: 'accessor',
            list: [
                {
                    name: 'selector',
                    arguments: [
                        { name: 'v' },
                        { name: 'throw_setting', default: 'TRUE' },
                    ],
                    return: 'this._selector',
                    visibility: '+'
                },
                {
                    name: 'd3Element',
                    arguments: [],
                    return: 'this._d3_element',
                    visibility: '+'
                },
                {
                    name: 'camera',
                    arguments: [
                        { name: 'v' },
                    ],
                    return: 'this._camera',
                    visibility: '+'
                },
                {
                    name: 'bounds',
                    arguments: [
                        { name: 'v' },
                    ],
                    return: 'this._camera.bounds()',
                    visibility: '+'
                },
            ],
        },
        {
            type: 'group',
            title: 'focus',
            list: [
                {
                    name: 'setSvgBounds',
                    arguments: [
                        { name: 'd3element' },
                        { name: 'bounds' },
                    ],
                    return: 'undefined',
                    visibility: '-'
                },
                {
                    name: 'focus',
                    arguments: [],
                    return: 'undefined',
                    visibility: '-'
                },
            ],
        },
        {
            type: 'group',
            title: 'move camera',
            list: [
                {
                    name: 'setSvgGrabMoveStart',
                    arguments: [
                        { name: 'event' },
                    ],
                    return: 'undefined',
                    visibility: '-'
                },
                {
                    name: 'setSvgGrabMoveDrag',
                    arguments: [
                        { name: 'event' },
                    ],
                    return: 'undefined',
                    visibility: '-'
                },
                {
                    name: 'setSvgGrabMoveEnd',
                    arguments: [],
                    return: 'undefined',
                    visibility: '-'
                },
            ],
        },
        {
            type: 'group',
            title: 'zoom camera',
            list: [
                {
                    name: 'setSvgGrabZoom',
                    arguments: [
                        { name: 'event' },
                    ],
                    return: 'undefined',
                    visibility: '-'
                },
            ],
        },
    ],
};

export default d3svg;
