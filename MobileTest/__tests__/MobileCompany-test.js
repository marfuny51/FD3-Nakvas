"use strict";

import React from 'react';
import MobileCompany from '../components/MobileCompany';
import renderer from 'react-test-renderer';

test('работа MobileCompany', () => {

  let clientsArr=[ 
    {id:101, surname:'Ivanov', name: 'Ivan', otch: 'Ivanovich', balance:200}, 
    {id:102, surname:'Sidorov', name: 'Sidor', otch: 'Sidorovich', balance:250}, 
    {id:103, surname:'Petrov', name: 'Petr', otch: 'Petrovich', balance:180},
    {id:104, surname:'Grigoriev', name: 'Grigoriy', otch: 'Grigorievich', balance:-220},
  ];
  // создаём тестовую версию компонента
  const component = renderer.create(
    <MobileCompany 
    clients={clientsArr}
  />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента кнопку фильтрации 'All'
  const buttonFiltrAll = component.root.find( el => el.props.value == 'All'); 
  // и "нажмём" на неё
  buttonFiltrAll.props.onClick();

  // найдём в вёрстке компонента кнопку фильтрации 'Active'
  const buttonFiltrActive = component.root.find( el => el.props.value=='Active'); 
  // и "нажмём" на неё
  buttonFiltrActive.props.onClick();

  // найдём в вёрстке компонента кнопку фильтрации 'Blocked'
  const buttonFiltrBlocked = component.root.find( el => el.props.value=='Blocked'); 
  // и "нажмём" на неё
  buttonFiltrBlocked.props.onClick();

  // найдём в вёрстке компонента кнопку фильтрации 'Add new client'
  const buttonAdd = component.root.find( el => el.props.value=='Add new client'); 
  // и "нажмём" на неё
  buttonAdd.props.onClick();

  // найдём в вёрстке компонента кнопку фильтрации 'Edit'
  //const buttonEdit = component.root.find( el => el.props.value=='Edit'); 
  // и "нажмём" на неё
  //buttonEdit.props.onClick();

  // найдём в вёрстке компонента кнопку фильтрации 'Delete'
  //const buttonDelete = component.root.find( el => el.props.value=='Delete'); 
  // и "нажмём" на неё
  //buttonDelete.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопки ещё раз
  buttonFiltrAll.props.onClick();
  buttonFiltrActive.props.onClick();
  buttonFiltrBlocked.props.onClick();
  buttonAdd.props.onClick();
  //buttonEdit.props.onClick();
  //buttonDelete.props.onClick();
  
  // и получаем окончательный снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  /*
  // можно эмулировать события, передавая в качестве объекта события то что нам нужно:
  wrapper.find('select').simulate('change', {
    target: { value: "hello" },
  });
  */

});
