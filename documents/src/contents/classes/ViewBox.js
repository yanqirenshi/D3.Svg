import React from 'react';

import { Section, Container } from 'react-bulma-components';
import DiagramClass from './componets/DiagramClass.js';

function D3Svg (props) {
    return (
        <Section>
          <Container>

            <div style={{display:'flex'}}>
              <div>
                <DiagramClass data={props.data} />
              </div>

              <div style={{marginLeft:22}}>
              </div>
            </div>

          </Container>
        </Section>
    );
}

export default D3Svg;
