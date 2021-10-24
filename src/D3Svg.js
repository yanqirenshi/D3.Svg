import * as d3 from 'd3';

import Camera from './Camera.js';
import Conditioner from './Conditioner.js';
import Callbacks from './Callbacks.js';

export { Camera }

export default class D3Svg {
    constructor(options={}) {
        this._selector = null;
        this._d3_element = null;
        this._camera = null;

        this._conditioner = new Conditioner();
        this._callbacks = new Callbacks().init();

        this.camera(new Camera());

        this._drag = null;

        this._layers = options.layers || [
            { id: 1, code: 'background' },
            { id: 2, code: 'foreground' },
        ];
    }
    settingZoom (d3element) {
        let self = this;

        let zoom = d3.zoom()
            .on("zoom", function (event) { self.zoomed(event); });

        d3element
            .transition()
            .call(zoom.scaleBy, this.camera().scale());

        d3element.call(zoom);

        return this;
    }
    settingClick (d3element) {
        d3element.on('click', () => {
            if(this._callbacks.click)
                this._callbacks.click();
        });

        return this;
    }
    settingLayers (d3element) {
        const layers = this.layers();

        d3element
            .selectAll('g.layer')
            .data(layers, (d) => { return d.id; })
            .enter()
            .append('g')
            .attr('class', (d) => {
                return 'layer ' + d.code;
            });

        return this;
    }
    setting () {
        const d3element = this.makeD3Element(this._selector);

        this._d3_element = d3element;

        this.settingLayers(d3element)
            .settingZoom(d3element)
            .settingClick(d3element);

        return d3element;
    }
    makeD3Element (val) {
        if (typeof val==='string') {
            this._selector = val;
            return this.makeD3Element(d3.select(val));
        }

        if (typeof val==='object')
            return val;

        let msg = 'Not Supported element value type. value=' + val;

        console.error({
            message: msg,
            value: val,
            type_of: typeof val,
            class_of: val.constructor.name
        });

        throw new Error(msg);
    }
    /** *************************************************************** *
     *  Layers
     * **************************************************************** */
    /** *************************************************************** *
     * Accessor
     * **************************************************************** */
    selector (v, throw_setting=true) {
        if (arguments.length!==0) {
            this._selector = v;

            if (!throw_setting)
                this.setting();
        }

        return this._selector;
    }
    d3Element () {
        return this._d3_element;
    }
    camera (v) {
        if (arguments.length!==0) {
            this._camera = v;
            this._camera._owner = this;
            this._camera.focus();
        }

        return this._camera;
    }
    bounds (v) {
        if (arguments.length!==0) {
            const svg = this.d3Element();

            if (!svg)
                return this._camera.bounds();

            svg.attr('width',  (v.w || 0) + 'px')
                .attr('height', (v.h || 0) + 'px');

            this._camera.bounds(v);
        }

        return this._camera.bounds();
    }
    layers () {
        return this._layers;
    }
    layer (code) {
        const element = this.d3Element();

        if (!element) return null;

        return element.select(`g.layer.${code}`);
    }
    /** *************************************************************** *
     * ZOOM Camera
     * **************************************************************** */
    zoomed (event) {
        let transform = event.transform;

        this.d3Element()
            .selectAll('g.layer')
            .attr("transform", transform);
    }
}
