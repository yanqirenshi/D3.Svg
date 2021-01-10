import React from 'react';

import { Section, Container } from 'react-bulma-components';
import HeadingMethod from './HeadingMethod.js';

export default function Method (props) {
    return (
        <Section>
          <Container>
            <HeadingMethod name={props.data.name}
                           args={['params']}
                           ret="this"/>
          </Container>
        </Section>
    );
}
