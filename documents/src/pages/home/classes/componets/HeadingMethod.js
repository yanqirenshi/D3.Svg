import React from 'react';

import { Heading } from 'react-bulma-components';

export default function HeadingMethod (props) {
    return (
        <Heading>
          <div style={{display: 'flex'}}>
            <p style={{fontWeight: 800}}>{props.name}</p>
          </div>
        </Heading>
    );
}
