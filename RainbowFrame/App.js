"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Frames  from './components/Frames';

let text='Hello!';
let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
  <Frames 
    colors={colors}
    ourText={text}
  />
  , document.getElementById('rainbowFrame') 
);

