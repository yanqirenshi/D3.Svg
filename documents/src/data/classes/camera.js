const camera = {
    name: 'Camera',
    attributes: [
        { name: '_d3svg', type: { name: '???' }, visibility: '-' },
        { name: '_drag',  type: { name: '???' }, visibility: '-' },
        { name: '_look',  type: { name: '???' }, visibility: '-' },
    ],
    methods: [
        {
            type: 'group',
            title: 'init',
            list: [
                { name: 'templateLook', type: { name: '???' }, visibility: '+' },
                { name: 'init',         type: { name: '???' }, visibility: '+' },
            ],
        },
        {
            type: 'group',
            title: 'accessor',
            list: [
                { name: 'look',   type: { name: '???' }, visibility: '-' },
                { name: 'lookAt', type: { name: '???' }, visibility: '-' },
                { name: 'scale',  type: { name: '???' }, visibility: '-' },
                { name: 'bounds', type: { name: '???' }, visibility: '-' },
            ],
        },
        {
            type: 'group',
            title: 'move',
            list: [
                { name: 'move', type: { name: '???' }, visibility: '-' },
                { name: 'zoom', type: { name: '???' }, visibility: '-' },
            ],
        },
        {
            type: 'group',
            title: 'zoom camera',
            list: [
                { name: 'moveStart', type: { name: '???' }, visibility: '-' },
                { name: 'moveDrag', type: { name: '???' }, visibility: '-' },
                { name: 'moveEnd', type: { name: '???' }, visibility: '-' },
            ],
        },
        {
            type: 'group',
            title: 'focus',
            list: [
                { name: 'focus', type: { name: '???' }, visibility: '-' },
            ],
        },
    ],
};

export default camera;
