import React from 'react';

import { Heading } from 'react-bulma-components';

import Pool from '@yanqirenshi/react-masonry-with-measure';

import Attribute from './Attribute.js';

export default function Attributes (props) {
    const item_class = 'pool-item-attribute';
    const options = {
        columnWidth:  props.column_width,
        itemSelector: `.${item_class}`,
        gutter:       props.gutter,
        itemClass:    item_class, // original parameter
    };

    const attributes = props.data.attributes;

    return (
        <div>
          <Heading size={1}>
            Attributes
          </Heading>

          <div>
            <Pool options={options}>
              {attributes.map(d => {
                  const col = 3;
                  const card_style = {
                      width: col * options.columnWidth + (col - 1) * options.gutter,
                      marginBottom: options.gutter,
                  };

                  return (
                      <div key={d.name}
                           className={item_class}
                           style={card_style}>
                        <Attribute data={d} />
                      </div>
                  );
              })}
            </Pool>
          </div>
        </div>
    );
}
