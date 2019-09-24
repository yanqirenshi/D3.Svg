class D3Svg {
    constructor (params) {
        if (!d3)
            throw new Error("d3 is empty");

        if (!params.svg)
            throw new Error("svg is empty");


        this._x = params.x ? params.x : 0;
        this._y = params.y ? params.y : 0;

        this._w = params.w ? params.w : 0;
        this._h = params.h ? params.h : 0;

        this._scale = params.scale;

        this._callbacks = this.initCallbacks (params);

        this.Svg(params.svg);

        this.refreshViewBox();
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
            default_callbaks.zoom =callbacks.zoom;

        if (callbacks.click)
            default_callbaks.click = callbacks.click;

        return default_callbaks;
    };
    Svg (svg) {
        if (!svg) return this._svg;

        this._svg = svg;

        this._svg.attr('width', this._w);
        this._svg.attr('height', this._h);

        let self = this;
        this._svg.call(d3.drag()
                       .on('start', function ()     { self.setSvgGrabMoveStart(d3.event); })
                       .on("drag",  function (d, i) { self.setSvgGrabMoveDrag(d3.event); })
                       .on('end',   function (d, i) { self.setSvgGrabMoveEnd(); }));

        this._svg.call(d3.zoom().on("zoom", function () { self.setSvgGrabZoom(d3.event); }));

        this._svg.on('click', () => {
            if(this._callbacks.click)
                this._callbacks.click();
        });

        return this._svg;
    }
    /** **************************************************************** *
     * util
     * **************************************************************** */
    raiseWarning (msg) {
        try {
            throw null;
        } catch (w) {
            console.log(msg);
        }
    }
    /** **************************************************************** *
     * ViewBox
     * **************************************************************** */
    initViewBox() {
        let w = this._w;
        let h = this._h;

        this._x = Math.floor(w/2 * -1);
        this._y = Math.floor(h/2 * -1);

        this.refreshViewBox();
    }
    refreshViewBox () {
        var scale = this._scale;
        var x = this._x,
            y = this._y;
        var orgW = this._w,
            orgH = this._h;
        var w = Math.floor(orgW * scale),
            h = Math.floor(orgH * scale);
        var viewbox = ''
            + (x + Math.floor((orgW - w)/2)) + ' '
            + (y + Math.floor((orgH - h)/2)) + ' '
            + w + ' '
            + h;

        this._svg.attr('viewBox', viewbox);
    }
    /** **************************************************************** *
     * Accessor
     * **************************************************************** */
    x () { return this._x; }
    y () { return this._x; }
    w () { return this._w; }
    h () { return this._h; }
    scale () { return this._scale; }
    setSize (w,h) {
        this._w = w ? w : 0;
        this._h = h ? h : 0;

        this._svg.attr('height', h + 'px');
        this._svg.attr('width',  w  + 'px');

        this.initViewBox();
    }
    /** **************************************************************** *
     * MOOVE Camera
     * **************************************************************** */
    setSvgGrabMoveStart (event) {
        this._drag = {
            x: event.x * this._scale,
            y: event.y * this._scale
        };
    }
    setSvgGrabMoveDrag (event) {
        var startX = this._drag.x,
            startY = this._drag.y;
        var x = event.x * this._scale,
            y = event.y * this._scale;

        this._x -= (x - startX);
        this._y -= (y - startY);
        this._drag.x = x;
        this._drag.y = y;

        this.refreshViewBox();
    }
    setSvgGrabMoveEnd () {
        this._drag = null;

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

        this._scale = transform.k;
        this.refreshViewBox();

        if(this._callbacks.zoom)
            this._callbacks.zoom(this._scale);
    }
}
