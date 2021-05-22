import React from 'react';

import { Section, Container, Heading, Content } from 'react-bulma-components';
import HeadingMethod from './HeadingMethod.js';
import MethodSyntax from './MethodSyntax.js';

export default function Method (props) {
    const args = (props.data.arguments || []).map(d => d.name);
    const ret = props.data.return;

    return (
        <Section style={{padding:22}}>
          <Container>
            <HeadingMethod name={props.data.name}
                           args={args}
                           ret={ret} />

            <Section style={{padding:11}}>
              <Container>
                <Heading size={4}>Syntax</Heading>

                <Content>
                  <MethodSyntax name={props.data.name}
                                args={args}
                                ret={ret}/>
                </Content>
              </Container>
            </Section>

            {props.data.arguments && props.data.arguments.length>0 &&
             <Section style={{padding:11}}>
               <Container>
                 <Heading size={4}>Arguments</Heading>

                 <Content>
                   {props.data.arguments.map(d => {
                       return <p key={d.name}>{d.name} : {d.description}</p>;
                   })}
                 </Content>
               </Container>
             </Section>}

            <Section style={{padding:11}}>
              <Container>
                <Heading size={4}>Value</Heading>

                <Content>
                  {props.data.return}
                </Content>
              </Container>
            </Section>

            {props.data.description && props.data.description.length > 0 &&
             <Section style={{padding:11}}>
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
