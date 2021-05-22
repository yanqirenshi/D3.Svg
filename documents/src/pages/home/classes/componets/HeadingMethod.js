import React from 'react';

import { Heading } from 'react-bulma-components';

function HeadingMethod (props) {
    return (
        <Heading>
          <div style={{display: 'flex'}}>
            <p style={{fontWeight: 800}}>{props.name}</p>
          </div>
        </Heading>
    );
}

export default HeadingMethod;
