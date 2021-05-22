import React from 'react';

import { Section, Container, Heading, Content } from 'react-bulma-components';
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

                <Content>
                  <p>{data.type.name}</p>
                </Content>
              </Container>
            </Section>

            <Section>
              <Container>
                <Heading size={4}>Initial Value</Heading>

                <Content>
                  <p>{data.default}</p>
                </Content>
              </Container>
            </Section>

            <Section>
              <Container>
                <Heading size={4}>Description</Heading>

                <Content>
                  <p>{data.description}</p>
                </Content>
              </Container>
            </Section>

          </Container>
        </Section>
    );
}

export default Attribute;
