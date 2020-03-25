"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';


test('работа MobileCompany', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <MobileCompany 
    name={companyName}
    clients={clientsArr}
  />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента кнопку фильтрации 'All'
  const buttonFiltrAll = component.root.find( el => el.id=='All'); 
  // и "нажмём" на неё
  buttonFiltrAll.props.onClick();

  // найдём в вёрстке компонента кнопку фильтрации 'Active'
  const buttonFiltrActive = component.root.find( el => el.id=='Active'); 
  // и "нажмём" на неё
  buttonFiltrActive.props.onClick();

  // найдём в вёрстке компонента кнопку фильтрации 'Blocked'
  const buttonFiltrBlocked = component.root.find( el => el.id=='Blocked'); 
  // и "нажмём" на неё
  buttonFiltrBlocked.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопки ещё раз
  buttonFiltrAll.props.onClick();
  buttonFiltrActive.props.onClick();
  buttonFiltrBlocked.props.onClick();
  
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
