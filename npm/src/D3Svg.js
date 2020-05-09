import * as d3 from 'd3';

class Conditioner {
    raiseWarning (msg) {
        try {
            console.log('Warn: ' + msg);
        } catch (w) {
            console.log(msg);
        }
    }
}

class ViewBox {
    center (w, h) {
        return {
            x: Math.floor( w/2 * -1 ),
            y: Math.floor( h/2 * -1 ),
        };
    }
    refresh (svg, x, y, w, h, scale) {
        let w_scaled = Math.floor(w * scale),
            h_scaled = Math.floor(h * scale);

        var attr = ''
            + (x - Math.floor(w_scaled/2)) + ' '
            + (y - Math.floor(h_scaled/2)) + ' '
            + w_scaled + ' '
            + h_scaled;

        svg.attr('viewBox', attr);
    }
}

class Camera {
    constructor () {
        this._drag = null;
        this._look = { at: { x:0, y:0 } };
    }
    init (params) {
        if (!params)
            return;

        this.scale(params.scale);

        this._look = params.look || { at: { x:0, y:0 } };
    }
    /** **************************************************************** *
     * Accessor
     * **************************************************************** */
    look () {
        return this._look;
    }
    scale (value) {
        if (arguments.length > 0)
            this._scale = value || 1;

        return this._scale;
    }
    /** **************************************************************** *
     * Move look at
     * **************************************************************** */
    moveStart (x, y) {
        let scale = this._scale;

        this._drag = {
            x: x * scale,
            y: y * scale
        };
    }
    moveDrag (x, y) {
        let scale = this._scale;

        let from_x = this._drag.x,
            from_y = this._drag.y;

        let to_x = x * scale,
            to_y = y * scale;

        this._drag.x = to_x;
        this._drag.y = to_y;

        this._look.at.x -= (to_x - from_x);
        this._look.at.y -= (to_y - from_y);
    }
    moveEnd () {
        this._drag = null;
    }
}

export default class D3Svg {
    constructor(params) {
        this._conditioner = new Conditioner();
        this._viewbox = new ViewBox();
        this._camera = new Camera();

        if (params)
            this.init(params);
    }
    init (params) {
        this._d3_element = this.ensureD3Element(params.d3_element);

        this._w = params.w;
        this._h = params.h;

        this._camera.init({
            look: params.look,
            scale: params.scale,
        });

        this._callbacks = this.initCallbacks (params);

        this.initSvg();

        this.refreshViewBox();

        return this;
    }
    initCallbacks (params) {
        let callbacks = params.callbacks;

        let default_callbaks = {
            click: null,
            move: {
                end: null,
            },
            zoom: null,
        };

        if (!callbacks)
            return default_callbaks;

        if (callbacks.move.end)
            default_callbaks.move.end = callbacks.move.end;

        if (callbacks.zoom)
            default_callbaks.zoom = callbacks.zoom;

        if (callbacks.click)
            default_callbaks.click = callbacks.click;

        return default_callbaks;
    };
    initSvg () {
        let svg = this._d3_element;

        svg.attr('width', this._w);
        svg.attr('height', this._h);

        let self = this;

        svg.call(
            d3.drag()
                .on('start', function ()     { self.setSvgGrabMoveStart(d3.event); })
                .on("drag",  function (d, i) { self.setSvgGrabMoveDrag(d3.event); })
                .on('end',   function (d, i) { self.setSvgGrabMoveEnd(); })
        );

        let zoom = d3.zoom()
            .on("zoom", function () { self.setSvgGrabZoom(d3.event); });

        svg.transition().call(zoom.scaleBy, this._camera.scale());

        svg.call(zoom);

        svg.on('click', () => {
            if(this._callbacks.click)
                this._callbacks.click();
        });

        return this._svg;
    }
    ensureD3Element (val) {
        if (typeof val==='string')
            return this.ensureD3Element(d3.select(val));

        if (typeof val==='object') {
            let class_name = val.constructor.name;

            if (class_name==='Selection' || class_name==='ke') {
                if (val.size()===0)
                    throw new Error('Not exist element.', val);

                return val;
            }
        }

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
    d3Element () {
        return this._d3_element;
    }
    w () {
        return this._w;
    }
    h () {
        return this._h;
    }
    /** **************************************************************** *
     * ViewBox
     * **************************************************************** */
    refreshViewBox () {
        let viewbox = this._viewbox;

        let camera = this._camera;
        let look_at = camera.look().at;

        let scale = camera.scale();

        viewbox.refresh(
            this._d3_element,
            look_at.x,
            look_at.y,
            window.innerWidth,
            window.innerHeight,
            scale,
        );
    }
    /** **************************************************************** *
     * MOOVE Camera
     * **************************************************************** */
    setSvgGrabMoveStart (event) {
        this._camera.moveStart(event.x, event.y);
    }
    setSvgGrabMoveDrag (event) {
        this._camera.moveDrag(event.x, event.y);

        this.refreshViewBox();
    }
    setSvgGrabMoveEnd () {
        this._camera.moveEnd();

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

        this._camera.scale(transform.k);

        this.refreshViewBox();

        if(this._callbacks.zoomSvg)
            this._callbacks.zoomSvg(this._scale);
    }
}
