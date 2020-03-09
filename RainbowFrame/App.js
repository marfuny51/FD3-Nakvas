"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame  from './components/Frame';

let text='Hello!';
let colorsArr = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
  <RainbowFrame 
    colors={colorsArr}
    ourText={text}
  />
  , document.getElementById('rainbowFrame') 
);

