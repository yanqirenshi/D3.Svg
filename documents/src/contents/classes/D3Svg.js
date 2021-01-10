import React from 'react';
import { Section, Container } from 'react-bulma-components';

import DiagramClass from './componets/DiagramClass.js';
import D3SvgAttributes from './D3SvgAttributes.js';
import D3SvgMethods from './D3SvgMethods.js';

function D3Svg (props) {
    return (
        <Section>
          <Container>

            <div style={{display:'flex'}}>
              <div>
                <DiagramClass data={props.data} />
              </div>

              <div style={{marginLeft:22}}>
                <D3SvgAttributes data={props.data} />
                <D3SvgMethods data={props.data} />
              </div>
            </div>

          </Container>
        </Section>
    );
}

export default D3Svg;
