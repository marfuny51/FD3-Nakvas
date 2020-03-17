import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrameHOC.css';
//import { withRainbowFrame } from './withRainbowFrame';

class RainbowFrameHOC extends React.Component {

    static propTypes = {
      children: PropTypes.string.isRequired
    };

    render() { 
      var ourchildren = this.props.children;
      return (
        ourchildren=
      <div>{ourchildren}</div>
      );
    }
}
    
export default RainbowFrameHOC;