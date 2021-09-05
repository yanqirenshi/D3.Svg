import React from 'react';
import DiagramClassMethod from './DiagramClassMethod.js';
import style from './DiagramClassStyles.js';

export default function DiagramClassMethodsGroup (props) {
    const d = props.data;

    return (
        <div style={props.number===0 ? style.item_group.first : style.item_group.not_first}>

          <p style={style.item_group.title}>
            {`<<${d.title}>>`}
          </p>

          <div>
            {d.list.map((d,i) => <DiagramClassMethod key={i} data={d} />)}
          </div>

        </div>
    );
}
