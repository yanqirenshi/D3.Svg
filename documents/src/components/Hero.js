import React from 'react';

import HeroNavbar from './HeroNavbar.js';
import HeroTabs from './HeroTabs.js';

function Hero(props) {
    return (
        <section className="hero is-primary is-medium">
          <div className="hero-head">
            <HeroNavbar />
          </div>

          <div className="hero-body" style={{padding: '3rem 1.5rem'}}>
            <div className="container has-text-centered">
              <h1 className="title">
                D3.Svg
              </h1>
              <h2 className="subtitle">
                Subtitle
              </h2>
            </div>
          </div>

          <div className="hero-foot">
            <HeroTabs source={props.tabs} callbacks={props.callbacks.tabs}/>
          </div>
        </section>
    );
}

export default Hero;
