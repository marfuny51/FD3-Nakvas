"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrameHOC  from './components/RainbowFrameHOC';

let colorsArr = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
  <RainbowFrameHOC colors={colorsArr}>
    </RainbowFrameHOC>
  , document.getElementById('rainbowFrameHOC') 
);

