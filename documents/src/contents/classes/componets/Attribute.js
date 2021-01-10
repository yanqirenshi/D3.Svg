import React from 'react';

import { Section, Container } from 'react-bulma-components';
import HeadingAttribute from './HeadingAttribute.js';

function Attribute (props) {
    const data = props.data;

    return (
        <Section key={data.name}>
          <Container>
            <HeadingAttribute name={data.name} />
          </Container>
        </Section>
    );
}

export default Attribute;
