import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

    static propTypes = {
      colors: PropTypes.array.isRequired
    };
  
    /*createRainbowFrame = () => {
        let {children:children, colors:colors} = this.props;
        for (let i = 0; i < colors.length; i++) {
            children =
                <div style={{padding: '10px', textAlign: 'center', border: `solid 5px ${colors[i]}`}}>
                    {children}
                </div>
        }
        return children
    };*/

    render() {
        var colors = this.props.colors;
        for (let i = 0; i < colors.length; i++) {
            var children =
                <div style={{padding: '10px', textAlign: 'center', border: `solid 5px ${colors[i]}`}}>
                    {children}
                </div>
        }
        return children;
    }
}
    
export default RainbowFrame;
