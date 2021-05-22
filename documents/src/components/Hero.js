import React from 'react';

import HeroNavbar from './HeroNavbar.js';
import HeroTabs from './HeroTabs.js';

function Hero(props) {
    const tabs = props.tabs;
    const tab = props.tab;

    return (
        <section className="hero is-primary is-medium" style={{background:'#96514d'}}>
          <div className="hero-head">
            <HeroNavbar />
          </div>

          <div className="hero-body" style={{padding: '3rem 1.5rem'}}>
            <div className="container has-text-centered">
              <h1 className="title">
                D3.Svg
              </h1>
              {/* <h2 className="subtitle"> */}
              {/*   Subtitle */}
              {/* </h2> */}
            </div>
          </div>

          <div className="hero-foot">
            <HeroTabs tabs={tabs} tab={tab} />
          </div>
        </section>
    );
}

export default Hero;
