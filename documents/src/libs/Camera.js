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
        let scale = this.scale();

        this.lookAt({
            x: this._look.at.x - (x * scale),
            y: this._look.at.y - (y * scale),
        });

    }
    /** **************************************************************** *
     * Focus
     * **************************************************************** */
    focus () {
        // TODO: ここは直接 viewBox 設定する。で良いかも。
        this._owner.refresh();
    }
}
