import React, { useState, useEffect } from 'react';

import Measure from "react-measure";
import D3Svg from './js/D3Svg.js';

const svg_id = `D3Svg-${Math.floor(Math.random() * Math.floor(88888888))}`;

function Asshole (props) {
    const [core] = useState(new D3Svg());

    useEffect(() => {
        if (!core.selector())
            core.selector('#' + svg_id);
    });

    const onResize = (contentRect) => core.bounds({ ...contentRect.bounds});

    return (
        <Measure bounds onResize={onResize}>
          {({ measureRef }) => {
              return <div ref={measureRef}
                          className="grid-inner"
                          style={{width:'100%', height: '100%'}}>
                       <svg id={svg_id}>
                       </svg>
                     </div>;
          }}
        </Measure>
    );
}

export default Asshole;
