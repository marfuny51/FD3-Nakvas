import React from 'react';
import PropTypes from 'prop-types';
import {voteEvents} from './events';



class MobileClient extends React.PureComponent {

  static propTypes = {
    clients:PropTypes.shape({
      id: PropTypes.number.isRequired,
      surname: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    clients: this.props.clients,
  };

  componentWillReceiveProps = (newProps) => {
    //console.log("MobileClient id="+this.props.clients.id+" componentWillReceiveProps");
    this.setState({clients:newProps.clients});
  };

  idClickedDelete = (EO) => {
    voteEvents.emit('EIdClickedDelete',this.props.clients.id);
  }

  idClickedEdit = (EO) => {
    voteEvents.emit('EIdClickedEdit',this.props.clients.id);
  }

  render() {

    return (
        <tr>
            <td>{this.state.clients.surname}</td>
            <td>{this.state.clients.name}</td>
            <td>{this.state.clients.otch}</td>
            <td>{this.state.clients.balance}</td>
            <td className={(this.state.clients.balance>0)?'ActiveClient':'BlockedClient'}>{(this.state.clients.balance>0)?'active':'blocked'}</td>
            <td><input type="button" value="Edit" onClick={this.idClickedEdit}/></td>
            <td><input type="button" value="Delete" onClick={this.idClickedDelete}/></td>
        </tr>
 
    );

  }

}

export default MobileClient;
