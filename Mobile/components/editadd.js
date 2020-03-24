import React from 'react';
import PropTypes from 'prop-types';
import {voteEvents} from './events';

import './editadd.css';

class EditAdd extends React.PureComponent {

  static propTypes = {
    clients:PropTypes.shape({
      id: PropTypes.number.isRequired,
      surname: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  newSurname = null;
  newName = null;
  newOtch = null;
  newBalance = null;

  setNewSurname = (ref) => {
    this.newSurname = ref
  }

  setNewName = (ref) => {
    this.newName = ref
  }

  setNewOtch = (ref) => {
    this.newOtch = ref
  }

  setNewBalance = (ref) => {
    this.newBalance = ref
  }

  save = (EO) => {
      let surname=this.newSurname.value;
      let name=this.newName.value;
      let otch=this.newOtch.value;
      let balance=this.newBalance.value;
      voteEvents.emit('ESave', this.props.id, surname, name, otch, balance);
  }

  render() {
    
    return (
        <div className='EditAdd'>
            <span>ID: </span><span>{this.props.id}</span><br/>
            <span>Surname: </span><input type='text' defaultValue={this.props.surname} ref={this.setNewSurname}/><br/>
            <span>Name: </span><input type='text'defaultValue={this.props.name} ref={this.setNewName}/><br/>
            <span>Middle name: </span><input type='text'defaultValue={this.props.otch} ref={this.setNewOtch}/><br/>
            <span>Balance: </span><input type='text'defaultValue={this.props.balance} ref={this.setNewBalance}/><br/>
            <input type="button" value="Save" onClick={this.save}/>
            <input type="button" value="Cancel"/>
        </div>
 
    );

  }

}

export default EditAdd;
