import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import {voteEvents} from './events';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        surname: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    deleteCode: null,
    editCode: null,
  };

  componentDidMount = () => {
    voteEvents.addListener('EIdClickedDelete',this.idDelete);
    voteEvents.addListener('EIdClickedEdit',this.idEdit);
  };

  componentWillUnmount = () => {
    voteEvents.removeListener('EIdClickedDelete',this.idDelete);
    voteEvents.removeListener('EIdClickedEdit',this.idEdit);
  };

  setName1 = () => {
    this.setState({name:'Velcom'});
  };

  setName2 = () => {
    this.setState({name:'MTS'});
  };

  idDelete = (id) => {
    this.setState( {deleteCode:id}, this.clientDelete);
  }

  clientDelete = () => {
    let clients = this.state.clients;
    clients = clients.filter(client => client.id !== this.state.deleteCode);
    this.setState({clients: clients});
  }

  idEdit = (id) => {
    this.setState( {editCode:id}, this.clientEdit);
  }

  clientEdit = () => {

  }

  allClicked = () => {
    this.setState({clients:this.props.clients});
  }

  activeClicked = () => {
    let activeClients =this.props.clients.slice();
    activeClients = activeClients.filter(client => client.balance>0);
    this.setState({clients:activeClients});
  }

  blockedClicked = () => {
    let activeClients =this.props.clients.slice();
    activeClients = activeClients.filter(client => client.balance<0);
    this.setState({clients:activeClients});
  }
  
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
        <input type="button" value="All" onClick={this.allClicked}/>
        <input type="button" value="Active" onClick={this.activeClicked}/>
        <input type="button" value="Blocked" onClick={this.blockedClicked}/><br/><br/>
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
