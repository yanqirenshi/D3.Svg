import React from 'react';
import { Section, Container } from 'react-bulma-components';

import DiagramClass from './componets/DiagramClass.js';
import Attributes from './componets/Attributes.js';
import Methods from './componets/Methods.js';
import style from './Style.js';

function Camera (props) {
    return (
        <Section>
          <Container>

            <div style={style.root}>
              <div>
                <DiagramClass data={props.data} />
              </div>

              <div style={style.right}>
                <Attributes data={props.data} />
                <Methods data={props.data} />
              </div>
            </div>

          </Container>
        </Section>
    );
}

export default Camera;
