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

  // найдём в вёрстке компонента кнопку фильтрации 'Active'
  const buttonFiltrActive = component.root.findByProps( {value:'Active'}); 
  // и "нажмём" на неё
  buttonFiltrActive.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента кнопку фильтрации 'All'
  const buttonFiltrAll = component.root.findByProps( {value:'All'}); 
  // и "нажмём" на неё
  buttonFiltrAll.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента кнопку фильтрации 'Blocked'
  const buttonFiltrBlocked = component.root.findByProps(  {value:'Blocked'}); 
  // и "нажмём" на неё
  buttonFiltrBlocked.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonFiltrActive.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonFiltrAll.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента кнопку фильтрации 'Add new client'
  const buttonAdd = component.root.findByProps( {value:'Add new client'}); 
  // и "нажмём" на неё
  buttonAdd.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента кнопки 'Edit'
  const buttonEdit = component.root.findAll( el => el.props.value=='Edit'); 
  // и "нажмём" на каждую кнопку
  buttonEdit.forEach(button => {
    button.props.onClick();
    // и получим уже изменённый снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
  });
  
  // найдём в вёрстке компонента кнопки 'Delete'
  const buttonDelete = component.root.findAll( el => el.props.value=='Delete'); 
  // и "нажмём" на каждую кнопку
  buttonDelete.forEach(button => {
    button.props.onClick();
    //и получим уже изменённый снэпшот
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
  });
  
    
  /*
  // можно эмулировать события, передавая в качестве объекта события то что нам нужно:
  wrapper.find('select').simulate('change', {
    target: { value: "hello" },
  });
  */

});
