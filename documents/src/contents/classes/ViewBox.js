import React from 'react';

import { Section, Container, Heading } from 'react-bulma-components';
import D3SvgAttributes from './D3SvgAttributes.js';
import D3SvgMethods from './D3SvgMethods.js';

function D3Svg () {
    return (
        <Section>
          <Container>
            <Heading>Class: D3Svg</Heading>
            <Heading subtitle>
              メインクラスです。
            </Heading>

            <D3SvgAttributes />
            <D3SvgMethods />
          </Container>
        </Section>
    );
}

export default D3Svg;
