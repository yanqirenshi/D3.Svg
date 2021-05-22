import React from 'react';

import { Section, Container, Heading, Content } from 'react-bulma-components';
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


            {props.data.arguments && props.data.arguments.length>0 &&
             <Section>
               <Container>
                 <Heading size={4}>Arguments</Heading>

                 <Content>
                   {props.data.arguments.map(d => {
                       return <p key={d.name}>{d.name} : {d.description}</p>;
                   })}
                 </Content>
               </Container>
             </Section>}

            <Section>
              <Container>
                <Heading size={4}>Value</Heading>

                <Content>
                  {props.data.return}
                </Content>
              </Container>
            </Section>

            {props.data.description && props.data.description.length > 0 &&
             <Section>
               <Container>
                 <Heading size={4}>Description</Heading>

                 <Content>
                   {props.data.description}
                 </Content>
               </Container>
             </Section>}

          </Container>
        </Section>
    );
}
