"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrameRekursia  from './components/RainbowFrameRekursia';

let colorsArr = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
  <RainbowFrameRekursia colors={colorsArr}>
    Hello!
    </RainbowFrameRekursia>
  , document.getElementById('rainbowFrame') 
);

