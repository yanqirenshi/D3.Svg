import React from 'react';

import { Section, Container, Heading, Content } from 'react-bulma-components';
import HeadingAttribute from './HeadingAttribute.js';

export default function Attribute (props) {
    const data = props.data;

    return (
        <Section style={{padding:22}}>
          <Container>
            <HeadingAttribute name={data.name} />

            <Section style={{padding:11}}>
              <Container>
                <Heading size={4}>Value Type</Heading>

                <Content>
                  <p>{data.type.name}</p>
                </Content>
              </Container>
            </Section>

            <Section style={{padding:11}}>
              <Container>
                <Heading size={4}>Initial Value</Heading>

                <Content>
                  <p>{data.default}</p>
                </Content>
              </Container>
            </Section>

            <Section style={{padding:11}}>
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
