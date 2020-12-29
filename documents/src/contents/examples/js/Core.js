import * as d3 from 'd3';

import Camera from './Camera.js';
import Conditioner from './Conditioner.js';
import ViewBox from './ViewBox.js';
import Callbacks from './Callbacks.js';

export default class Core {
    constructor() {
        this._conditioner = new Conditioner();
        this._viewbox = new ViewBox();
        this._camera = new Camera();
        this._callbacks = new Callbacks().init();

        this._selector = null;

        this._d3_element = null;

        this._bounds = { w:0, h: 0 };
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
            .call(zoom.scaleBy, this._camera.scale());

        d3element.call(zoom);
    }
    settingClick (d3element) {
        d3element.on('click', () => {
            if(this._callbacks.click)
                this._callbacks.click();
        });
    }
    setting () {
        const d3element = this.ensureD3Element(this._selector);

        this.setBounts(d3element, this.bounds());

        this.settingMove(d3element);
        this.settingZoom(d3element);
        this.settingClick(d3element);

        return d3element;
    }
    ensureD3Element (val) {
        if (typeof val==='string') {
            this._selector = val;

            return this.ensureD3Element(d3.select(val));
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
     * utils
     * **************************************************************** */
    setBounts (d3element, bounds) {
        if (d3element)
            d3element
            .attr('width', bounds.width + 'px')
            .attr('height', bounds.height + 'px');
    }
    /** **************************************************************** *
     * Accessor
     * **************************************************************** */
    selector (v) {
        if (arguments.length!==0) {
            this._selector = v;

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
        }

        return this._camera;
    }
    bounds (v) {
        if (arguments.length!==0) {
            this._bounds = v;

            this.setBounts(this.d3Element(), this._bounds);
        }

        return this._bounds;
    }
    size (w, h) {
        this.d3Element()
            .attr('width', w || 0)
            .attr('height', h || 0);
    }
    focus () {
        let viewbox = this._viewbox;

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
