export default class ViewBox {
    refresh (d3element, camera) {
        if (!d3element)
            return;

        const w = d3element.attr('width');
        const h = d3element.attr('height');

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

        d3element.attr('viewBox', attr);
    }
}
