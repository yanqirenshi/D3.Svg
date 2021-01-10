import React from 'react';

import { Section, Container, Heading } from 'react-bulma-components';
import Method from './Method.js';

function Methods (props) {
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
            <Heading size={1}>Methods</Heading>

            {methods.map(d => <Method key={d.name} data={d}/>)}
          </Container>
        </Section>
    );
}

export default Methods;
