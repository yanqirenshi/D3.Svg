import React from 'react';

import { Section, Container, Heading } from 'react-bulma-components';
import HeadingAttribute from './HeadingAttribute.js';

function Attribute (props) {
    const data = props.data;

    return (
        <Section>
          <Container>
            <HeadingAttribute name={data.name} />

            <Section>
              <Container>
                <Heading size={4}>Value Type</Heading>
              </Container>
            </Section>

            <Section>
              <Container>
                <Heading size={4}>Initial Value</Heading>
              </Container>
            </Section>

            <Section>
              <Container>
                <Heading size={4}>Description</Heading>
              </Container>
            </Section>

          </Container>
        </Section>
    );
}

export default Attribute;
