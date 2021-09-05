import React, { useState, useEffect } from 'react';

import Measure from "react-measure";
import D3Svg from '../../../libs/D3Svg.js';

const svg_id = `D3Svg-${Math.floor(Math.random() * Math.floor(88888888))}`;

function gridsData () {
    const size = 10000;

    const lineSize = (pos) => {
        if (pos===0)     return 20;
        if (pos%1000===0) return 10;
        return 1;
    };

    const out = [];
    for (let pos=size*-1; pos<=size ; pos+=100 ) {
        const line = lineSize(pos);
        out.push({ x1: pos,     x2: pos,  y1: size*-1, y2: size, size: line});
        out.push({ x1: size*-1, x2: size, y1: pos,     y2: pos,  size: line});
    }

    return out;
}

function initLayers (svg) {
    const layers = [
        { id: 1, name: 'background' },
        { id: 2, name: 'foreground' },
    ];

    svg.selectAll('g.layer')
        .data(layers, (d) => { return d.id; })
        .enter()
        .append('g')
        .attr('class', (d) => {
            return 'layer ' + d.name;
        });
}

export default function Asshole (props) {
    const [core] = useState(new D3Svg());
    const [grids] = useState(gridsData());

    useEffect(() => {
        if (core.selector())
            return;

        core.selector('#' + svg_id, false);

        const svg = core.d3Element();
        initLayers(svg);

        const background = svg.select('g.layer.background');

        svg.selectAll('line.grid')
            .data(grids)
            .enter()
            .append("line")
            .attr("x1",d=>d.x1)
            .attr("x2",d=>d.x2)
            .attr("y1",d=>d.y1)
            .attr("y2",d=>d.y2)
            .attr("stroke-width", d=>d.size)
            .attr("stroke","#0e9aa7");
    });

    const onResize = (contentRect) => {
        core.bounds({
            w: Math.floor(contentRect.bounds.width),
            h: Math.floor(contentRect.bounds.height-2),
        });
    };

    return (
        <Measure bounds onResize={onResize}>
          {({ measureRef }) => {
              return (
                  <div ref={measureRef}
                       className="grid-inner"
                       style={{background: '#eee', height: 'calc(100% - 4px)'}}>
                    <svg id={svg_id} />
                  </div>
              );
          }}
        </Measure>
    );
}
