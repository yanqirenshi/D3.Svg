// viewport と スケールを管理する。
// viewport と focus は相互関係にある。
// viewport と svg の viewBox は同じ比率。
export default class Camera {
    constructor (params) {
        this._owner = null;

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
    lookAt (v) {
        if (arguments.length > 0 && v) {
            const x = this._look.at.x;
            const y = this._look.at.y;

            if (v.x || v.x===0) this._look.at.x = v.x;
            if (v.y || v.y===0) this._look.at.y = v.y;

            if (x !== this._look.at.x || y !== this._look.at.y)
                this.focus();
        }

        return this._look.at;
    }
    scale (v) {
        if (arguments.length > 0) {
            const scale = this._look.scale;

            this._look.scale = v || 1;

            if (scale !== this._look.scale)
                this.focus();
        }

        return this._look.scale;
    }
    bounds (v) {
        if (arguments.length > 0) {
            const old_w = this._look.bounds.w,
                  old_h = this._look.bounds.h;

            const w = v.w || v.width;
            const h = v.h || v.height;

            if (w || w===0) this._look.bounds.w = w < 0 ? 0 : w;
            if (h || h===0) this._look.bounds.h = h < 0 ? 0 : h;

            if (old_w !== this._look.bounds.w || old_h !== this._look.bounds.h)
                this.focus();
        }

        return this._look.bounds;
    }
    /** **************************************************************** *
     * zoom
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
    move (x, y) {
        const scale = this.scale();

        this.lookAt({
            x: this._look.at.x - (x * scale),
            y: this._look.at.y - (y * scale),
        });
    }
    /** **************************************************************** *
     * Focus
     * **************************************************************** */
    focus () {
        const owner = this._owner;

        const svg = owner.d3Element();
        const camera = this;

        if (!svg)
            return;

        // TODO: これやるんだったら bound 不要だな。
        // svg = bound だからどちらでも良いのか。
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
}
