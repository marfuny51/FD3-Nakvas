import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrameRekursia.css';

class RainbowFrameRekursia extends React.Component {

    static propTypes = {
      colors: PropTypes.array.isRequired,
      children: PropTypes.string.isRequired
    };

    render() {
        var ourcolors = this.props.colors;
        var ourchildren = this.props.children;
        if (ourcolors.length==0) {
            return ourchildren;
        }
        else {
            return (
            <div style={{padding: '10px', textAlign: 'center', border: 'solid 5px ' + ourcolors[0]}}>
                <RainbowFrameRekursia colors={ourcolors.slice(1)}>{ourchildren}</RainbowFrameRekursia>
            </div>
            )
        }
    }
}
    
export default RainbowFrameRekursia;
