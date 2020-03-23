"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
let clientsArr=[ 
  {id:101, surname:'Ivanov', name: 'Ivan', otch: 'Ivanovich', balance:200}, 
  {id:102, surname:'Sidorov', name: 'Sidor', otch: 'Sidorovich', balance:250}, 
  {id:103, surname:'Petrov', name: 'Petr', otch: 'Petrovich', balance:180},
  {id:104, surname:'Grigoriev', name: 'Grigoriy', otch: 'Grigorievich', balance:-220},
];

ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clientsArr}
  />
  , document.getElementById('mobile') 
);

