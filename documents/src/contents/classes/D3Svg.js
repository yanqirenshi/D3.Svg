import React from 'react';
import { Section, Container } from 'react-bulma-components';

import DiagramClass from './componets/DiagramClass.js';
import Attributes from './componets/Attributes.js';
import Methods from './componets/Methods.js';

function D3Svg (props) {
    return (
        <Section>
          <Container>

            <div style={{display:'flex'}}>
              <div>
                <DiagramClass data={props.data} />
              </div>

              <div style={{marginLeft:22}}>
                <Attributes data={props.data} />
                <Methods data={props.data} />
              </div>
            </div>

          </Container>
        </Section>
    );
}

export default D3Svg;
