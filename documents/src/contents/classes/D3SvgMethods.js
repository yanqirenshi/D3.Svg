import React from 'react';

import { Section, Container, Heading } from 'react-bulma-components';
import HeadingMethod from './componets/HeadingMethod.js';

function D3SvgMethods () {
    return (
        <Section>
          <Container>
            <Heading>Methods</Heading>

            <Section>
              <Container>
                <HeadingMethod name="constructor" args={['params']} ret="this"/>
              </Container>
            </Section>

            <Section>
              <Container>
                <HeadingMethod name="init" args={['params']} ret="this"/>
              </Container>
            </Section>

            <Section>
              <Container>
                <HeadingMethod name="d3Element" ret="D3 Element"/>
              </Container>
            </Section>

            <Section>
              <Container>
                <HeadingMethod name="w" ret="width"/>
              </Container>
            </Section>

            <Section>
              <Container>
                <HeadingMethod name="h" ret="height"/>
              </Container>
            </Section>

            <Section>
              <Container>
                <HeadingMethod name="size" args={['w', 'h']}/>
              </Container>
            </Section>

            <Section>
              <Container>
                <HeadingMethod name="focus"/>
              </Container>
            </Section>

            <Section>
              <Container>
                <HeadingMethod name="refreshViewBox"/>
              </Container>
            </Section>

            <Section>
              <Container>
                <HeadingMethod name="setSvgGrabMoveStart" args={['event']}/>
              </Container>
            </Section>

            <Section>
              <Container>
                <HeadingMethod name="setSvgGrabMoveDrag" args={['event']}/>
              </Container>
            </Section>

            <Section>
              <Container>
                <HeadingMethod name="setSvgGrabMoveEnd"/>
              </Container>
            </Section>

            <Section>
              <Container>
                <HeadingMethod name="setSvgGrabZoom" args={['event']}/>
              </Container>
            </Section>

          </Container>
        </Section>
    );
}

export default D3SvgMethods;
