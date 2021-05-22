const d3svg = {
    name: 'D3Svg',
    attributes: [
        { visibility: '-', name: '_selector',    type: { name: 'String' },               default: '???', description: '' },
        { visibility: '-', name: '_d3_element',  type: { name: 'D3.js Selection' },      default: '???', description: '' },
        { visibility: '-', name: '_conditioner', type: { name: 'Instance Conditioner' }, default: '???', description: '' },
        { visibility: '-', name: '_camera',      type: { name: 'Instance Camera' },      default: '???', description: '' },
        { visibility: '-', name: '_viewbox',     type: { name: 'Instance Viewbox' },     default: '???', description: '' },
        { visibility: '-', name: '_callbacks',   type: { name: 'Instance Callbacks' },   default: '???', description: '' },
    ],
    methods: [
        {
            type: 'group',
            title: 'setting',
            list: [
                {
                    name: 'settingMove',
                    arguments: [
                        { name: 'd3element', default: '', description: '' },
                    ],
                    return: 'this',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'settingZoom',
                    arguments: [
                        { name: 'd3element', default: '', description: '' },
                    ],
                    return: 'this',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'settingClick',
                    arguments: [
                        { name: 'd3element', default: '', description: '' },
                    ],
                    return: 'this',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'setting',
                    type: { name: '???', default: '', description: '' },
                    arguments: [],
                    return: 'd3element',
                    visibility: '+',
                    description: '???',
                },
                {
                    name: 'makeD3Element',
                    arguments: [
                        { name: 'val', default: '', description: '' },
                    ],
                    return: 'D3 Element',
                    visibility: '-',
                    description: '???',
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
                        { name: 'v', default: '', description: '' },
                        { name: 'throw_setting', default: 'TRUE', description: '' },
                    ],
                    return: 'this._selector',
                    visibility: '+',
                    description: '???',
                },
                {
                    name: 'd3Element',
                    arguments: [],
                    return: 'this._d3_element',
                    visibility: '+',
                    description: '???',
                },
                {
                    name: 'camera',
                    arguments: [
                        { name: 'v', default: '', description: '' },
                    ],
                    return: 'this._camera',
                    visibility: '+',
                    description: '???',
                },
                {
                    name: 'bounds',
                    arguments: [
                        { name: 'v', default: '', description: '' },
                    ],
                    return: 'this._camera.bounds()',
                    visibility: '+',
                    description: '???',
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
                        { name: 'd3element', default: '', description: '' },
                        { name: 'bounds', default: '', description: '' },
                    ],
                    return: 'undefined',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'focus',
                    arguments: [],
                    return: 'undefined',
                    visibility: '+',
                    description: '???',
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
                        { name: 'event', default: '', description: '' },
                    ],
                    return: 'undefined',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'setSvgGrabMoveDrag',
                    arguments: [
                        { name: 'event', default: '', description: '' },
                    ],
                    return: 'undefined',
                    visibility: '-',
                    description: '???',
                },
                {
                    name: 'setSvgGrabMoveEnd',
                    arguments: [],
                    return: 'undefined',
                    visibility: '-',
                    description: '???',
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
                        { name: 'event', default: '', description: '' },
                    ],
                    return: 'undefined',
                    visibility: '-',
                    description: '???',
                },
            ],
        },
    ],
};

export default d3svg;
