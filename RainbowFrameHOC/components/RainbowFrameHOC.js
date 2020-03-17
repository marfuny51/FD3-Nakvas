import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrameHOC.css';

class RainbowFrameHOC extends React.Component {

    static propTypes = {
      children: PropTypes.string.isRequired
    };

    render() { 
        <div>{this.props.children}</div>
    }
}
    
export default RainbowFrameHOC;