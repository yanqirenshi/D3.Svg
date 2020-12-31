export default class Callbacks {
    init (callbacks) {
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
    }
}
