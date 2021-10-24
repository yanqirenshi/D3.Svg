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

function drawGrids (background) {
    background
        .selectAll('line.grid')
        .data(gridsData())
        .enter()
        .append("line")
        .attr("x1",d=>d.x1)
        .attr("x2",d=>d.x2)
        .attr("y1",d=>d.y1)
        .attr("y2",d=>d.y2)
        .attr("stroke-width", d=>d.size)
        .attr("stroke","#0e9aa7");
}

export default function Asshole (props) {
    const [d3svg] = useState(new D3Svg({
        layers: [
            { id: 1, code: 'background' },
            { id: 2, code: 'foreground' },
        ]
    }));

    useEffect(() => {
        d3svg.selector('#' + svg_id, false);
        drawGrids(d3svg.layer('background'));
    }, [d3svg]);

    const onResize = (contentRect) => {
        d3svg.bounds({
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
