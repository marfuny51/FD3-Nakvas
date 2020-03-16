import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrameHOC.css';

class RainbowFrameHOC extends React.Component {

    static propTypes = {
      colors: PropTypes.array.isRequired,
      children: PropTypes.object.isRequired
    };

    render() {
        var ourcolors = this.props.colors;
        var ourchildren = this.props.children;
        ourcolors.forEach(color => {
            ourchildren= 
            <div style={{padding: '10px', textAlign: 'center', border: 'solid 5px ' + color}}>
            {ourchildren}
            </div>
        })
        return ourchildren;
    }
}
    
export default RainbowFrameHOC;