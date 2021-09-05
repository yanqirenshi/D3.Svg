import React, { useState } from 'react';

import TabsClasses from './TabsClasses.js';

import D3Svg from './d3/D3Svg.js';
import Camera from './d3/Camera.js';
import ViewBox from './d3/ViewBox.js';

import * as data from '../../data/Classes.js';

export default function D3 () {
    const [tabs, setTabs] = useState([
        { code: 'd3.zoom',         label: 'd3.zoom',         active:  true },
        { code: 'zoom.events',     label: 'Zoom Events',     active: false },
        { code: 'zoom.transforms', label: 'Zoom Transforms', active: false },
    ]);

    const clickTab = (code) => {
        setTabs(tabs.map(d => {
            d.active = d.code===code;
            return d;
        }));
    };
    const isActive = (k) => tabs.find(d=>d.code===k).active;

    return (
        <div style={{width:'100%'}}>

          <div style={{marginTop: 22, display: 'flex', justifyContent: 'center'}}>
            <TabsClasses tabs={tabs} onClickTab={clickTab} />
          </div>

          {isActive('d3.zoom')         && <D3Svg   data={data.d3svg} />}
          {isActive('zoom.events')     && <Camera  data={data.camera} />}
          {isActive('zoom.transforms') && <ViewBox data={data.viewbox} />}
        </div>
    );
}
