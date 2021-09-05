import React from 'react';

import { Section, Container, Heading, Content, Box  } from 'react-bulma-components';
import HeadingMethod from './HeadingMethod.js';
import MethodSyntax from './MethodSyntax.js';

function description (data) {
    const v = data.description;

    if (Array.isArray(v))
        return v.map((d,i) => <p key={i}>{d}</p>);

    return v;
}

function style (data) {
    if (data.visibility==='+')
        return {
            marginBottom: 20
        };
    else
        return {
            marginBottom: 20,
            border: 'none',
            boxShadow: 'none',
        };
}


export default function Method (props) {
    const args = (props.data.arguments || []).map(d => d.name);
    const ret = props.data.return;

    const data = props.data;

    return (
        <Box style={style(data)}>
          <HeadingMethod name={data.name}
                         args={args}
                         ret={ret} />

          <Section style={{padding:11}}>
            <Container>
              <Heading size={4}>Syntax</Heading>

              <Content>
                <MethodSyntax name={data.name}
                              args={args}
                              ret={ret}/>
              </Content>
            </Container>
          </Section>

          {data.arguments && data.arguments.length>0 &&
           <Section style={{padding:11}}>
             <Container>
               <Heading size={4}>Arguments</Heading>

               <Content>
                 {data.arguments.map(d => {
                     return <p key={d.name}>{d.name} : {d.description}</p>;
                 })}
               </Content>
             </Container>
           </Section>}

          <Section style={{padding:11}}>
            <Container>
              <Heading size={4}>Value</Heading>

              <Content>
                {data.return}
              </Content>
            </Container>
          </Section>

          {data.description && data.description.length > 0 &&
           <Section style={{padding:11}}>
             <Container>
               <Heading size={4}>Description</Heading>

               <Content>
                 {description(data)}
               </Content>
             </Container>
           </Section>}

        </Box>
    );
}
