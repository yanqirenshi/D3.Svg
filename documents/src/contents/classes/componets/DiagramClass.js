import React from 'react';

import {
    Control, Input, Checkbox, Panel, Icon, Button, Table
} from 'react-bulma-components';

import DiagramClassAttributes from './DiagramClassAttributes.js';
import DiagramClassMethods from './DiagramClassMethods.js';

export default function DiagramClass (props) {
    const data = props.data;

    return (
        <Panel>
          <Panel.Header>{data.name}</Panel.Header>

          <Panel.Block>
            <DiagramClassAttributes attributes={data.attribute}/>
          </Panel.Block>

          <Panel.Block>
            <DiagramClassMethods methods={data.methods} />
          </Panel.Block>
        </Panel>
    );
}
