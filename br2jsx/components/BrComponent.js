import React from 'react';
import PropTypes from 'prop-types';

import './BrComponent.css';

class BrComponent extends React.Component {

    static propTypes = {
      text: PropTypes.string.isRequired,
    };

    render() {
        var text=this.props.text;
        var reg = /<br[ \/]+>|<br>/g;
        var lines = text.split(reg);
        return <div className='Text'>
            {
            lines.map((line, index) => ((index<lines.length-1)?(<React.Fragment key={index}>{line}<br/></React.Fragment>):line))
            }
        </div>;
    }
}
    
export default BrComponent;
