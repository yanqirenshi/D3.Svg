import * as d3 from 'd3';

import Camera from './Camera.js';
import Conditioner from './Conditioner.js';
import Callbacks from './Callbacks.js';

export { Camera }

export default class D3Svg {
    constructor() {
        this._selector = null;
        this._d3_element = null;
        this._camera = null;

        this._conditioner = new Conditioner();
        this._callbacks = new Callbacks().init();

        this.camera(new Camera());

        this._drag = null;
    }
    settingMove (d3element) {
        let self = this;
        d3element.call(
            d3.drag()
                .on('start', function (e) { self.moveStart(e); })
                .on("drag",  function (e) { self.moveDrag(e); })
                .on('end',   function ()  { self.moveEnd(); })
        );

        return this;
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
    setting () {
        const d3element = this.makeD3Element(this._selector);

        this._d3_element = d3element;

        this.settingMove(d3element)
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
            this.refresh();
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
    /** *************************************************************** *
     * refresh
     * **************************************************************** */
    refresh () {
        const svg = this.d3Element();
        const camera = this.camera();

        if (!svg)
            return;

        const w = svg.attr('width').replace('px','') * 1;
        const h = svg.attr('height').replace('px','') * 1;

        const look = camera.look();
        const x = look.at.x;
        const y = look.at.y;

        const scale = camera.scale();

        let w_scaled = Math.floor(w * scale),
            h_scaled = Math.floor(h * scale);

        var attr = ''
            + (x - Math.floor(w_scaled/2)) + ' '
            + (y - Math.floor(h_scaled/2)) + ' '
            + w_scaled + ' '
            + h_scaled;

        svg.attr('viewBox', attr);
    }
    /** *************************************************************** *
     * MOOVE Camera
     * **************************************************************** */
    moveStart (event) {
        this._drag = {
            x: event.x,
            y: event.y,
        };
    }
    moveDrag (event) {
        let from_x = this._drag.x,
            from_y = this._drag.y;

        let to_x = event.x,
            to_y = event.y;

        this._drag.x = to_x;
        this._drag.y = to_y;

        this.camera().move(to_x - from_x, to_y - from_y);

        this.refresh();
    }
    moveEnd () {
        this._drag = null;

        if(this._callbacks.move.end)
            this._callbacks.move.end({
                x: this._x,
                y: this._y,
                z: 0
            });
    }
    /** *************************************************************** *
     * ZOOM Camera
     * **************************************************************** */
    zoomed (event) {
        let transform = event.transform;

        this.camera().scale(transform.k);

        this.refresh();

        if(this._callbacks.zoomSvg)
            this._callbacks.zoomSvg(this._scale);
    }
}
