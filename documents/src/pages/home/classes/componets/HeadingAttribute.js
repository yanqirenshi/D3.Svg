import React from 'react';

import { Heading } from 'react-bulma-components';

function HeadingAttribute (props) {
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

export default HeadingAttribute;
