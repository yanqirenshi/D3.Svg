import React from 'react';

import DiagramClassMethod from './DiagramClassMethod.js';
import DiagramClassMethodsGroup from './DiagramClassMethodsGroup.js';

function contents (list) {
    return list.map((d, i)=> {
        if ('string'===(typeof d.type) && 'group'===d.type)
            return <DiagramClassMethodsGroup key={i} data={d} number={i} />;

        return <DiagramClassMethod key={i} data={d} />;
    });
}

export default function DiagramClassMethods (props) {
    const methods = props.methods;

    return (
        <div style={{display:'flex', flexDirection: 'column'}}>
          {contents(methods)}
        </div>
    );
}
