import React from 'react';

function Hero() {
    return (
        <section className="hero is-primary is-medium">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                  </a>
                  <span className="navbar-burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>

                <div id="navbarMenuHeroA" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">
                      Home
                    </a>
                    <a className="navbar-item">
                      Examples
                    </a>
                    <a className="navbar-item">
                      Documentation
                    </a>
                    <span className="navbar-item">
                      <a className="button is-primary is-inverted">
                        <span className="icon">
                          <i className="fab fa-github"></i>
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
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
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li className="is-active"><a>Overview</a></li>
                  <li><a>Exampe</a></li>
                  <li><a>Classes</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
    );
}

export default Hero;
