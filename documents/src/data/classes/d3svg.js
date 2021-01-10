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
            title: 'accessor',
            list: [
                { name: 'settingMove',   type: { name: '???' }, visibility: '+' },
                { name: 'settingZoom',   type: { name: '???' }, visibility: '+' },
                { name: 'settingClick',  type: { name: '???' }, visibility: '+' },
                { name: 'setting',       type: { name: '???' }, visibility: '+' },
                { name: 'makeD3Element', type: { name: '???' }, visibility: '+' },
            ],
        },
        {
            type: 'group',
            title: 'focus',
            list: [
                { name: 'setSvgBounds', type: { name: '???' }, visibility: '-' },
                { name: 'focus',        type: { name: '???' }, visibility: '-' },
            ],
        },
        {
            type: 'group',
            title: 'move camera',
            list: [
                { name: 'setSvgGrabMoveStart', type: { name: '???' }, visibility: '-' },
                { name: 'setSvgGrabMoveDrag',  type: { name: '???' }, visibility: '-' },
                { name: 'setSvgGrabMoveEnd',   type: { name: '???' }, visibility: '-' },
            ],
        },
        {
            type: 'group',
            title: 'zoom camera',
            list: [
                { name: 'setSvgGrabZoom', type: { name: '???' }, visibility: '-' },
            ],
        },
    ],
};

export default d3svg;
