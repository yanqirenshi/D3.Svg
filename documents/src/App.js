import React, { useState } from 'react';

import Hero from './components/Hero.js';
import Classes from './contents/Classes.js';
import Examples from './contents/Examples.js';

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

function App() {
    const [tabs, setTabs] = useState([
        { code: 'examples', label: 'Examples', active: false },
        { code: 'classes',  label: 'Classes',  active:  true },
    ]);

    const callbacks = {
        tabs: {
            click: (code) => setTabs(changeTab(code, tabs))
        }
    };

    return (
        <>
          <Hero tabs={tabs} callbacks={callbacks} />
          {active('classes',  tabs) && <Classes />}
          {active('examples', tabs) && <Examples />}
        </>
    );
}

export default App;
