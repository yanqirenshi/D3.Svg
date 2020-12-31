import * as d3 from 'd3';

import Camera from './Camera.js';
import Conditioner from './Conditioner.js';
import ViewBox from './ViewBox.js';
import Callbacks from './Callbacks.js';

export { Camera }

export default class D3Svg {
    constructor() {
        this._selector = null;
        this._d3_element = null;

        this._conditioner = new Conditioner();
        this._viewbox = new ViewBox();
        this._callbacks = new Callbacks().init();

        this.camera(new Camera());
    }
    settingMove (d3element) {
        let self = this;

        d3element.call(
            d3.drag()
                .on('start', function ()     { self.setSvgGrabMoveStart(d3.event); })
                .on("drag",  function (d, i) { self.setSvgGrabMoveDrag(d3.event); })
                .on('end',   function (d, i) { self.setSvgGrabMoveEnd(); })
        );
    }
    settingZoom (d3element) {
        let self = this;

        let zoom = d3.zoom()
            .on("zoom", function () { self.setSvgGrabZoom(d3.event); });

        d3element
            .transition()
            .call(zoom.scaleBy, this.camera().scale());

        d3element.call(zoom);
    }
    settingClick (d3element) {
        d3element.on('click', () => {
            if(this._callbacks.click)
                this._callbacks.click();
        });
    }
    setting () {
        const d3element = this.makeD3Element(this._selector);

        this._d3_element = d3element;

        this.settingMove(d3element);
        this.settingZoom(d3element);
        this.settingClick(d3element);

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
    /** **************************************************************** *
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
            this._camera._d3svg = this;
            this.focus();
        }

        return this._camera;
    }
    bounds (v) {
        if (arguments.length!==0)
            this._camera.bounds(v);

        return this._camera.bounds();
    }
    /** **************************************************************** *
     * focus
     * **************************************************************** */
    setSvgBounds (d3element, bounds) {
        if (!d3element)
            return;

        d3element
            .attr('width',  (bounds.w || 0) + 'px')
            .attr('height', (bounds.h || 0) + 'px');
    }
    focus () {
        let viewbox = this._viewbox;

        this.setSvgBounds(this.d3Element(), this.bounds());

        viewbox.refresh(this.d3Element(), this.camera());
    }
    /** **************************************************************** *
     * MOOVE Camera
     * **************************************************************** */
    setSvgGrabMoveStart (event) {
        this.camera().moveStart(event.x, event.y);
    }
    setSvgGrabMoveDrag (event) {
        this.camera().moveDrag(event.x, event.y);

        this.focus();
    }
    setSvgGrabMoveEnd () {
        this.camera().moveEnd();

        if(this._callbacks.move.end)
            this._callbacks.move.end({
                x: this._x,
                y: this._y,
                z: 0
            });
    }
    /** **************************************************************** *
     * ZOOM Camera
     * **************************************************************** */
    setSvgGrabZoom (event) {
        let transform = event.transform;

        this.camera().scale(transform.k);

        this.focus();

        if(this._callbacks.zoomSvg)
            this._callbacks.zoomSvg(this._scale);
    }
}
