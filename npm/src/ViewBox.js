export default class ViewBox {
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
