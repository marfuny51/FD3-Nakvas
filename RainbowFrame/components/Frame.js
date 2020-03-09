import React from 'react';
import PropTypes from 'prop-types';

import './Frame.css';

class Frame extends React.Component {

  static propTypes = {
    color: PropTypes.string,
  };
  
  render() {
    return (
      <div style={{border:"solid 5px "+this.props.color,padding:"12px"}}>
        {this.props.children}
      </div>
    );
  }

}

export default Frame;