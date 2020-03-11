"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import BrComponent  from './components/BrComponent';

let text="первый<br>второй<br/>третий<br />последний";

ReactDOM.render(
    <BrComponent text={text}/>
  , document.getElementById('br2jsx') 
);

