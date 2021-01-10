import React from 'react';

import { Section, Container } from 'react-bulma-components';
import HeadingMethod from './HeadingMethod.js';

export default function Method (props) {
    const args = props.data.arguments.map(d => d.name);
    const ret = props.data.return;

    return (
        <Section>
          <Container>
            <HeadingMethod name={props.data.name}
                           args={args}
                           ret={ret} />
          </Container>
        </Section>
    );
}
