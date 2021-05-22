import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

import Hero from '../components/Hero.js';
import Classes from './home/Classes.js';
import Examples from './home/Examples.js';

function Home () {
    const [tabs] = useState([
        { code: 'examples', label: 'Examples'},
        { code: 'classes',  label: 'Classes' },
    ]);

    const code = new URLSearchParams(useLocation().search).get('tab');
    const tab = tabs.find(d=>d.code===code) || tabs[0];

    const hero = <Hero tabs={tabs} tab={tab} />;
    return (
        <>
          {'classes' ===tab.code
           && <div style={{overflow:'auto', height: '100%'}}>
                {hero}
                <Classes />
              </div>}
          {'examples'===tab.code
           && <div style={{height:'100%', display: 'flex', flexDirection: 'column'}}>
                {hero}
                <div style={{flexGrow:1}}>
                  <Examples />
                </div>
              </div>}
        </>
    );
}

export default Home;
