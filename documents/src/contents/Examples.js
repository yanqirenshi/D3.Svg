import React from 'react';

import { Section, Container, Heading } from 'react-bulma-components';
import D3Svg from './examples/D3Svg.js';

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
        <Section>
          <Container>
            <Heading>Examples</Heading>
            <Heading subtitle>
              A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
            </Heading>

            <div style={{width:888, height:555}}>
              <D3Svg camera={camera}/>
            </div>
          </Container>
        </Section>
    );
}

export default Examples;
