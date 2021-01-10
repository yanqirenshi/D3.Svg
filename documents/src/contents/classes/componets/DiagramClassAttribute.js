import React from 'react';
import style from './DiagramClassStyles.js';

export default function DiagramClassAttribute (props) {
    const data = props.data;

    return (
        <div style={style.item.root}>
          <div style={style.item.visibility}>
            {data.visibility}
          </div>
          <div style={style.item.name}>
            {data.name}
          </div>
        </div>
    );
}
