import React from 'react';

import { Heading } from 'react-bulma-components';

export default function HeadingAttribute (props) {
    return (
        <Heading style={{marginBottom:11}}>
          <div style={{display: 'flex'}}>
            <p style={{fontWeight: 800}}>
              {props.name}
            </p>
          </div>
        </Heading>
    );
}
