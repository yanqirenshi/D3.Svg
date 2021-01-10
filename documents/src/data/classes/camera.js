const camera = {
    name: 'Camera',
    attributes: [
        { visibility: '-', name: '_d3svg', type: { name: '???' }, default: 'NULL', description: '' },
        { visibility: '-', name: '_drag',  type: { name: '???' }, default: 'NULL', description: '' },
        { visibility: '-', name: '_look',  type: { name: '???' }, default: 'this.templateLook()', description: '' },
    ],
    methods: [
        {
            type: 'group',
            title: 'init',
            list: [
                {
                    name: 'templateLook',
                    visibility: '+',
                    arguments: [],
                    return: 'Object',
                    description: '',
                },
                {
                    name: 'init',
                    visibility: '+',
                    arguments: [
                        { name: 'params', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: 'undefined',
                    description: '',
                },
            ],
        },
        {
            type: 'group',
            title: 'accessor',
            list: [
                {
                    name: 'look',
                    visibility: '-',
                    arguments: [
                        { name: 'v', type: { name: 'Object' }, default: null, description: '' },
                    ],
                    return: 'this._look',
                    description: '',
                },
                {
                    name: 'lookAt',
                    visibility: '-',
                    arguments: [
                        { name: 'v', type: { name: 'Object' }, default: null, description: '{ x: number, y: number }' },
                    ],
                    return: 'this._look.at',
                    description: '',
                },
                {
                    name: 'scale',
                    visibility: '-',
                    arguments: [
                        { name: 'v', type: { name: 'number' }, default: null, description: '' },
                    ],
                    return: 'this._look.scale',
                    description: '',
                },
                {
                    name: 'bounds',
                    visibility: '-',
                    arguments: [
                        { name: 'v', type: { name: 'Object' }, default: null, description: '{ w: number, h: number}' },
                    ],
                    return: 'this._look.bounds',
                    description: '',
                },
            ],
        },
        {
            type: 'group',
            title: 'move',
            list: [
                {
                    name: 'move',
                    visibility: '-',
                    arguments: [
                        { name: 'v', type: { name: 'Object' }, default: null, description: '{ x: number, y: number}' },
                        { name: 'set', type: { name: 'Boolean' }, default: 'TRUE', description: '' },
                    ],
                    return: 'this',
                    description: '',
                },
                {
                    name: 'zoom',
                    visibility: '-',
                    arguments: [
                        { name: 'v', type: { name: 'number' }, default: null, description: '' },
                        { name: 'set', type: { name: 'Boolean' }, default: 'TRUE', description: '' },
                    ],
                    return: 'this',
                    description: '',
                },
            ],
        },
        {
            type: 'group',
            title: 'zoom camera',
            list: [
                {
                    name: 'moveStart',
                    visibility: '-',
                    arguments: [
                        { name: 'x', type: { name: 'number' }, default: null, description: '' },
                        { name: 'y', type: { name: 'number' }, default: null, description: '' },
                    ],
                    return: 'undefined',
                    description: '',
                },
                {
                    name: 'moveDrag',
                    visibility: '-',
                    arguments: [
                        { name: 'x', type: { name: 'number' }, default: null, description: '' },
                        { name: 'y', type: { name: 'number' }, default: null, description: '' },
                    ],
                    return: 'undefined',
                    description: '',
                },
                {
                    name: 'moveEnd',
                    visibility: '-',
                    arguments: [],
                    return: 'undefined',
                    description: '',
                },
            ],
        },
        {
            type: 'group',
            title: 'focus',
            list: [
                {
                    name: 'focus',
                    visibility: '-',
                    arguments: [],
                    return: 'undefined',
                    description: '',
                },
            ],
        },
    ],
};

export default camera;
