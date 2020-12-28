import React from 'react';

import { Section, Container, Heading } from 'react-bulma-components';

function Examples() {
  return (
      <Section>
        <Container>
          <Heading>Examples</Heading>
          <Heading subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
          </Heading>
        </Container>
      </Section>
  );
}

export default Examples;
