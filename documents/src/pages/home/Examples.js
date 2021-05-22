import React from 'react';

import Asshole from './examples/Asshole.js';

const style = {
    root: {
        width:'100%',
        height: '100%',
        padding: 22
    }
};

export default function Examples() {
    const camera = {
        look:  {
            at: {
                x:0,
                y:0,
            },
        },
        scale: null,
    };

    return (
        <div style={style.root}>
          <div style={{height:'100%'}}>
            <Asshole camera={camera}/>
          </div>
        </div>
    );
}
