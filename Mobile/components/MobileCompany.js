import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import EditAdd from './editadd';
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
    mode: null, //0 -view, 1- edit, 2 - add
  };

  componentDidMount = () => {
    voteEvents.addListener('EIdClickedDelete',this.idDelete);
    voteEvents.addListener('EIdClickedEdit',this.idEdit);
    voteEvents.addListener('ESave',this.clientSave);
    voteEvents.addListener('ECancel',this.clientCancel);
  };

  componentWillUnmount = () => {
    voteEvents.removeListener('EIdClickedDelete',this.idDelete);
    voteEvents.removeListener('EIdClickedEdit',this.idEdit);
    voteEvents.removeListener('ESave',this.clientSave);
    voteEvents.removeListener('ECancel',this.clientCancel);
  };

  setName1 = () => {
    this.setState({name:'Velcom'});
  };

  setName2 = () => {
    this.setState({name:'MTS'});
  };

  idDelete = (id) => {
    this.setState( {deleteCode:id, mode:''}, this.clientDelete);
  }

  clientDelete = () => {
    let clients = this.state.clients;
    clients = clients.filter(client => client.id !== this.state.deleteCode);
    this.setState({clients: clients});
  }

  idEdit = (id) => {
    this.setState( {editCode:id, mode:1});
  }

  idAdd = (EO) => {
    this.setState( {mode:2});
  }

  clientSave = (id, surname, name, otch, balance) => {
    let clients = [...this.state.clients];
    if (this.state.mode===1) {
      clients.forEach( (c, i) => {
        if (c.id == id) {
          let client={...c};
          client.surname = surname;
          client.name = name;
          client.otch = otch;
          client.balance = parseInt(balance);
          clients[i]=client;
        }
      })
    }; 
    if (this.state.mode===2) {
        let newObject = {id:clients.length+2, surname: surname, name: name, otch: otch, balance: parseInt(balance)}; 
        clients = [...clients, newObject];
    }
    this.setState({ mode:'', clients: clients});
  };

  clientCancel = () => {
    let clients = [...this.state.clients];
    this.setState({mode:'', clients: clients});
  }

  allClicked = () => {
    let clients = [...this.state.clients];
    this.setState({clients:clients});
  }

  activeClicked = () => {
    let clients = [...this.state.clients];
    let activeClients = clients.filter(client => client.balance>0);
    this.setState({clients:activeClients});
  }

  blockedClicked = () => {
    let clients = [...this.state.clients];
    let blockedClients = clients.filter(client => client.balance<0);
    this.setState({clients:blockedClients});
  }
  
  render() {

    console.log("MobileCompany render");
    let clients = [...this.state.clients];
    var clientsCode=clients.map( client =>
      <MobileClient key={client.id} clients={client}  />
    );

    var editClient = clients.find(client => 
      client.id===this.state.editCode  
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
        <input type="button" value="Add new client" onClick={this.idAdd}/>
      {
        (this.state.mode===1)&&
        <EditAdd key={editClient.id}
        mode={this.state.mode}
        id={editClient.id}
        surname={editClient.surname}
        name={editClient.name}
        otch={editClient.otch}
        balance={editClient.balance}/>
      }

      {
        (this.state.mode===2)&&
        <EditAdd key={this.state.clients.length+2}
        mode={this.state.mode}
        id={this.state.clients.length+2}
        surname=''
        name=''
        otch=''
        balance=''/>
      }
      </div>
    )
    ;

  }

}

export default MobileCompany;
