import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

    static propTypes = {
      colors: PropTypes.array.isRequired,
    };

    render() {
        var colors = this.props.colors;
        var children = this.props.children;
        colors.map(color => {
            children= 
            <div style={{padding: '10px', textAlign: 'center', border: 'solid 5px ' + color}}>
            {children}
            </div>
        })
        return children;
    }
}
    
export default RainbowFrame;
