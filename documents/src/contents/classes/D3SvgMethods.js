import React from 'react';

import { Section, Container, Heading } from 'react-bulma-components';
import Method from './componets/Method.js';

function D3SvgMethods (props) {
    const methods = props.data.methods.reduce((list, d) => {
        if ("string"===(typeof d.type) && 'group'===d.type)
            list = list.concat(d.list || []);
        else
            list.push(d);

        return list;
    }, []);

    return (
        <Section>
          <Container>
            <Heading>Methods</Heading>

            {methods.map(d => <Method key={d.name} data={d}/>)}
          </Container>
        </Section>
    );
}

export default D3SvgMethods;
