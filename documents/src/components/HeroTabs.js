import React from 'react';

function HeroTabs (props) {

    const clickTab = (e) => {
        props.callbacks.click (e.target.getAttribute('tab_code'));
    };

    return (
        <nav className="tabs">
          <div className="container">
            <ul>
              {props.source.map(d => {
                  return <li key={d.code}
                             className={d.active ? "is-active" : ''}
                             tab_code={d.code}
                             onClick={clickTab}>

                           <a tab_code={d.code}>
                             {d.label}
                           </a>
                         </li>;
              })}
            </ul>
          </div>
        </nav>
    );
}

export default HeroTabs;
