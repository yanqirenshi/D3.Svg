import React from 'react';

import { Section, Container, Heading } from 'react-bulma-components';
import Attributes from './componets/Attributes.js';

function D3SvgAttributes (props) {
    const attributes = props.data.attributes;

    return (
        <Section>
          <Container>
            <Heading>Attributes</Heading>

            {attributes.map(d => <Attributes key={d.name} data={d} />)}
          </Container>
        </Section>
    );
}

export default D3SvgAttributes;
