import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

import Frame from './Frame';

class RainbowFrame extends React.Component {

    static propTypes = {
      colors: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string,
        })
        ),
    };
  
    state = {
      ourColors: this.props.colors,
      curColor: ''
    }

    componentWillMount = () => {
        var colors = this.state.ourColors.slice();
        var newColor = colors[Math.floor(Math.random() * colors.length)];
        this.setState({curColor:newColor, ourColors: colors.filter(c => c!==newColor)});
    }

    render() {
    
        return (
            <div className='RainbowFrame'>
                <Frame color={this.state.curColor}>
                <Frame >
                <Frame >
                <Frame >
                <Frame >
                <Frame >
                <Frame >
                    Hello!
                </Frame>
                </Frame>
                </Frame>
                </Frame>
                </Frame>
                </Frame>
                </Frame>
            </div>
        );
    }
}
    
    export default RainbowFrame;
