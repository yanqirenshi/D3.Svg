import React from 'react';
import { Link } from "react-router-dom";

function HeroTabs (props) {
    const tabs = props.tabs;
    const tab = props.tab;

    const isSelected = (d, tab) => d.code===tab.code;

    return (
        <nav className="tabs is-centered is-boxed">
          <div className="container">
            <ul>
              {tabs.map(d => {
                  const is_selected = isSelected(d, tab);
                  return (
                      <li key={d.code}
                          className={is_selected ? "is-active" : ''}>
                        <Link to={{search: "?tab=" + d.code,}}
                              style={is_selected ? {color:'#96514d'} : null}>
                          {d.label}
                        </Link>
                      </li>
                  );
              })}
            </ul>
          </div>
        </nav>
    );
}

export default HeroTabs;
