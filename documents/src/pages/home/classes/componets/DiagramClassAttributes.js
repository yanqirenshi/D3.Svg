import React from 'react';

import DiagramClassAttribute from './DiagramClassAttribute.js';

export default function DiagramClassAttributes (props) {
    const attributes = props.attributes;

    return (
        <div style={{width:'100%'}}>
            {attributes.map(d => {
                return <DiagramClassAttribute key={d.name} data={d}/>;
            })}
        </div>
    );
}
