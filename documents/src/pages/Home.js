import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

import Hero from '../components/Hero.js';
import Classes from './home/Classes.js';
import Examples from './home/Examples.js';

const changeTab = (code, tabs) => {
    return tabs.map((d) => {
        const new_data = {...d};
        new_data.active = new_data.code===code;
        return new_data;
    });
};

const active = (code, tabs) => {
    return tabs.find(d=>d.code===code).active;
};

function Home () {
    const [tabs, setTabs] = useState([
        { code: 'examples', label: 'Examples' },
        { code: 'classes',  label: 'Classes'  },
    ]);

    const code = new URLSearchParams(useLocation().search).get('tab');
    const tab = tabs.find(d=>d.code===code) || tabs[0];

    return (
        <div>
          <Hero tabs={tabs} tab={tab} />
          {'classes' ===tab.code && <Classes />}
          {'examples'===tab.code && <Examples />}
        </div>
    );
}

export default Home;
