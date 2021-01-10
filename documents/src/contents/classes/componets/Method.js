import React from 'react';

import { Section, Container, Heading } from 'react-bulma-components';
import HeadingMethod from './HeadingMethod.js';

export default function Method (props) {
    const args = (props.data.arguments || []).map(d => d.name);
    const ret = props.data.return;

    return (
        <Section>
          <Container>
            <HeadingMethod name={props.data.name}
                           args={args}
                           ret={ret} />


            <Section>
              <Container>
                <Heading size={4}>Arguments</Heading>
              </Container>
            </Section>

            <Section>
              <Container>
                <Heading size={4}>Value</Heading>
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
