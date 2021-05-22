import React, { useState, useEffect } from 'react';

import Measure from "react-measure";
import D3Svg from '../../../libs/D3Svg.js';

const svg_id = `D3Svg-${Math.floor(Math.random() * Math.floor(88888888))}`;

export default function Asshole (props) {
    const [core] = useState(new D3Svg());

    useEffect(() => {
        if (core.selector())
            return;

        core.selector('#' + svg_id);
        core.setting();
    });

    const onResize = (contentRect) => {
        core.bounds({
            width: Math.floor(contentRect.bounds.width),
            height: Math.floor(contentRect.bounds.height),
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
