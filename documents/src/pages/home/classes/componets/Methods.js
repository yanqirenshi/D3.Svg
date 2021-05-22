import React from 'react';

import { Section, Container, Heading } from 'react-bulma-components';

import Pool from '@yanqirenshi/react-masonry-with-measure';

import Method from './Method.js';

export default function Methods (props) {
    const item_class = 'pool-item-method';
    const options = {
        columnWidth: 100,
        itemSelector: `.${item_class}`,
        gutter: 10,
        itemClass: item_class, // original parameter
    };

    const methods = props.data.methods.reduce((list, d) => {
        if ("string"===(typeof d.type) && 'group'===d.type)
            list = list.concat(d.list || []);
        else
            list.push(d);

        return list;
    }, []);

    return (
        <div>
          <Heading size={1}>
            Methods
          </Heading>

          <div>
            <Pool options={options}>
              {methods.map(d => {
                  const col = 5;
                  const card_style = {
                      width: col * options.columnWidth + (col - 1) * options.gutter,
                      marginBottom: options.gutter,
                  };

                  return (
                      <div key={d.name}
                           className={item_class}
                           style={card_style}>
                        <Method key={d.name} data={d}/>
                      </div>
                  );
              })}
            </Pool>
          </div>
        </div>
    );
}
