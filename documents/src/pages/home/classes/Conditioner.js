import React from 'react';
import { Section, Container } from 'react-bulma-components';

import DiagramClass from './componets/DiagramClass.js';
import Attributes from './componets/Attributes.js';
import Methods from './componets/Methods.js';

const style = {
    root: {
        display:'flex'
    },
    left: {
        paddingLeft: 88,
        paddingRight: 88,
    },
    right: {
        flexGrow: 1,
    },
};

function Conditioner (props) {
    const column_width = 100;
    const gutter = 10;

    return (
        <div style={style.root}>
          <div style={style.left}>
            <DiagramClass data={props.data} />
          </div>

          <div style={style.right}>
            <Attributes data={props.data} column_width={column_width} gutter={gutter} />
            <Methods    data={props.data} column_width={column_width} gutter={gutter} />
          </div>
        </div>
    );
}

export default Conditioner;
