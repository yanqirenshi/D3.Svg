export default class Camera {
    constructor (params) {
        this._d3svg = null;

        this._drag = null;
        this._look = this.templateLook();

        if (params)
            this.init(params);
    }
    templateLook () {
        return {
            at: {
                x:0,
                y:0,
            },
            bounds: {
                w: 0,
                h:0 ,
            },
            scale: 1,
        };
    }
    init (params) {
        if (!params)
            return;

        this.scale(params.scale);

        this.look(params.look);
    }
    /** **************************************************************** *
     * Accessor
     * **************************************************************** */
    look (v) {
        if (arguments.length > 0) {
            this.lookAt(v.at);

            if (v.bounds) {
                if (v.bounds.w) this._look.bounds.w = v.bounds.w;
                if (v.bounds.h) this._look.bounds.h = v.bounds.h;
            }

            if (v.scale || v.scale===0) {
                this._look.scale = v.scale;
            }
        }

        return this._look;
    }
    lookAt(v) {
        if (arguments.length > 0 && v) {
            if (v.x || v.x===0) this._look.at.x = v.x;
            if (v.y || v.y===0) this._look.at.y = v.y;
        }

        return this._look.at;
    }
    scale (v) {
        if (arguments.length > 0)
            this._look.scale = v || 1;

        return this._look.scale;
    }
    bounds (v) {
        if (arguments.length > 0) {
            const w = v.w || v.width;
            const h = v.h || v.height;

            if (w || w===0) this._look.bounds.w = w < 0 ? 0 : w;
            if (h || h===0) this._look.bounds.h = h < 0 ? 0 : h;
        }

        return this._look.bounds;
    }
    /** **************************************************************** *
     * move
     * **************************************************************** */
    move (v, set=false) {
        if (!v) return this;

        if (set) {
            this.lookAt(v);
            return this;
        }

        const at = this.lookAt();
        const at_new =  {...at};

        if (v.x) at_new.x += v.x;
        if (v.y) at_new.y += v.y;

        if (at_new.x===at.x && at_new.y===at.y)
            return this;

        this.lookAt(at_new);

        return this;
    }
    /** **************************************************************** *
     * move
     * **************************************************************** */
    zoom (v, set=false) {
        if (!v) return this;

        if (set) {
            this.scale(v);
            return this;
        }

        const scale = this.scale();
        const scale_new = scale + v;

        if (scale_new<=0 || scale===scale_new)
            return this;

        this.scale(scale_new);

        return this;
    }
    /** **************************************************************** *
     * Move Drag
     * **************************************************************** */
    moveStart (x, y) {
        let scale = this.scale();

        this._drag = {
            x: x * scale,
            y: y * scale
        };
    }
    moveDrag (x, y) {
        let scale = this.scale();

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
    /** **************************************************************** *
     * Focus
     * **************************************************************** */
    focus () {
        this._d3svg.focus();
    }
}
