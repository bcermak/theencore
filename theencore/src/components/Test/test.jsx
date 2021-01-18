import React from 'react';
import Chosen from 'react-chosen';


function Test() {
    return (
        <Chosen onChange={value => console.log(value)}>
          <option>vanilla</option>
          <option>chocolate</option>
          <option>strawberry</option>
        </Chosen>
      );
    }

export default Test;