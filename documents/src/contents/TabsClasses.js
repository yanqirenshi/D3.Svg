import React from 'react';
import {Tabs} from 'react-bulma-components';

function makeTabs (tabs, callback) {
    const clickTab = (e) => {
        callback(e.target.getAttribute('tab_code'));
    };

    return tabs.map(d => {
        return <Tabs.Tab key={d.code}
                         active={d.active}
                         tab_code={d.code}
                         onClick={clickTab}>
                 {d.label}
               </Tabs.Tab>;

    });
}

function TabsClasses (props) {
    const tabs = props.tabs || [];

    return (
        <Tabs type="toggle">
          {makeTabs(tabs, props.onClickTab)}
        </Tabs>
    );
}

export default TabsClasses;
