import React from 'react';

import { Section, Container, Heading } from 'react-bulma-components';
import Asshole from './examples/Asshole.js';

function Examples() {
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
        <div style={{width:1111,marginLeft:'auto', marginRight: 'auto'}}>
          <Section>
            <Container>
              <Heading>Examples</Heading>
              <Heading subtitle>
                A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
              </Heading>

              <div style={{width:888, height:555}}>
                <Asshole camera={camera}/>
              </div>
            </Container>
          </Section>
        </div>
    );
}

export default Examples;
