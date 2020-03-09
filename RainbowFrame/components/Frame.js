import React from 'react';
import PropTypes from 'prop-types';

class Frame extends React.Component {

  static propTypes = {
    color: PropTypes.string,
  };
  
  render() {
    return (
      <div style={{border:"solid 2px " + this.props.color, padding:"10px"}}>
        {this.props.children}
      </div>
    );
  }

}

export default Frame;