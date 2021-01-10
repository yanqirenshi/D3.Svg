import React from 'react';

import { Heading } from 'react-bulma-components';

function HeadingMethod (props) {
    return (
        <Heading>
          <div style={{display: 'flex'}}>
            <p style={{fontWeight: 800}}>{props.name}</p>

            {props.args && props.args.length>0 &&
             <p style={{marginLeft:22, fontStyle: 'oblique'}}>
               {props.args.map((d,i) => {
                   return <span key={i} style={i===0 ? null : {marginLeft:11}}>
                            {d}
                          </span>;
               })}
             </p>}

            <p style={{marginLeft:22}}>⇒</p>

            <p style={{marginLeft:22, fontStyle: 'oblique'}}>
              {props.ret || "NULL"}
            </p>
          </div>
        </Heading>
    );
}

export default HeadingMethod;
