import React, { useState } from 'react';

import TabsClasses from './TabsClasses.js';

import Overview from './classes/Overview.js';
import D3Svg from './classes/D3Svg.js';
import Camera from './classes/Camera.js';
import ViewBox from './classes/ViewBox.js';
import Callbacks from './classes/Callbacks.js';
import Conditioner from './classes/Conditioner.js';

import * as data from '../../data/Classes.js';

export default function Classes() {
    const [tabs, setTabs] = useState([
        { code: 'Overview',    label: 'Overviw',     active: false },
        { code: 'D3Svg',       label: 'D3Svg',       active:  true },
        { code: 'Camera',      label: 'Camera',      active: false },
        { code: 'ViewBox',     label: 'ViewBox',     active: false },
        { code: 'Callbacks',   label: 'Callbacks',   active: false },
        { code: 'Conditioner', label: 'Conditioner', active: false },
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

          {isActive('Overview')    && <Overview />}
          {isActive('D3Svg')       && <D3Svg       data={data.d3svg} />}
          {isActive('Camera')      && <Camera      data={data.camera} />}
          {isActive('ViewBox')     && <ViewBox     data={data.viewbox} />}
          {isActive('Callbacks')   && <Callbacks   data={data.callbacks} />}
          {isActive('Conditioner') && <Conditioner data={data.conditioner} />}
        </div>
    );
}
