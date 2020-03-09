import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

import Frames from './Frames';

class RainbowFrame extends React.Component {

    static propTypes = {
      text: PropTypes.string.isRequired,
      colors: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string,
        })
        ),
    };
  
    state = {
      ourColors: this.props.colors,
    }

    render() {

        let colors = this.state.ourColors;
        
        return (
            <div className='RainbowFrame'>
                {colors.map(color => {
                    <Frames color={color}>
                        <div className='Text'>{this.props.text}</div>
                    </Frames>
                })
                }
            </div>
        );
    }
}
    
    export default RainbowFrame;
