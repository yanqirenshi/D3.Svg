export default class Camera {
    constructor () {
        this._drag = null;
        this._look = this.templateLook();
    }
    templateLook () {
        return {
            at: {
                x:0,
                y:0,
            }
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
        if (arguments.length > 0)
            this._scale = v || this.templateLook();

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
