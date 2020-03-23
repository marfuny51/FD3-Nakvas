import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.array.isRequired,
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( client =>
      <MobileClient key={client.id} clients={client}  />
    );

    return (
      <div className='MobileCompany'>
        <input type="button" value="Velcom" onClick={this.setName1} />
        <input type="button" value="MTS" onClick={this.setName2} />
        <div className='MobileCompanyName'>Company:{this.state.name}</div><br/>
        <input type="button" value="All" />
        <input type="button" value="Active" />
        <input type="button" value="Blocked" /><br/><br/>
        <table className='AllTable'>
          <thead className='Title'>
              <tr>
                  <th>Surname</th>
                  <th>Name</th>
                  <th>Middle name</th>
                  <th>Balance</th>
                  <th>Status</th>
                  <th>Edit</th>
                  <th>Delete</th>
              </tr>
          </thead>
          <tbody className='Table'>
          {clientsCode}
          </tbody>
      </table><br/>
        <input type="button" value="Add new client" />
      </div>
    )
    ;

  }

}

export default MobileCompany;
