import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

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
    console.log("MobileClient id="+this.props.clients.id+" componentWillReceiveProps");
    this.setState({clients:newProps.clients});
  };

  render() {

    console.log("MobileClient id="+this.state.clients.id+" render");
    
    return (
        <tr>
            <td>{this.state.clients.surname}</td>
            <td>{this.state.clients.name}</td>
            <td>{this.state.clients.otch}</td>
            <td>{this.state.clients.balance}</td>
            <td>Статус</td>
            <td><input type="button" value="Edit"/></td>
            <td><input type="button" value="Delete"/></td>
        </tr>
 
    );

  }

}

export default MobileClient;
