"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Ishop3 from './components/ishop3';

let nameShopText='Fresh';
let productArr=require('./products.json');

ReactDOM.render(
  <Ishop3 
    nameShop={nameShopText}
    products={productArr}
  />
  , document.getElementById('ishop3') 
);