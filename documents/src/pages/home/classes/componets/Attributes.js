import React from 'react';

import { Section, Container, Heading } from 'react-bulma-components';
import Attribute from './Attribute.js';

export default function Attributes (props) {
    const attributes = props.data.attributes;

    return (
        <Section>
          <Container>
            <Heading size={1}>
              Attributes
            </Heading>

            {attributes.map(d => <Attribute key={d.name} data={d} />)}
          </Container>
        </Section>
    );
}
