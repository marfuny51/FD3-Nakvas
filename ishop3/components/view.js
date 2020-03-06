import React from 'react';
import PropTypes from 'prop-types';

import './view.css';

class ViewProduct extends React.Component {

    static propTypes= {
        nameproduct: PropTypes.string,
        code: PropTypes.number,
        price: PropTypes.number,
        url: PropTypes.string,
        stock: PropTypes.number
    };

    render() {
        return (
            <div key={this.props.code}>
                <div>{this.props.nameproduct}</div>
                <div>{this.props.price}</div>
                <div>{this.props.url}</div>
                <div>{this.props.stock}</div>
            </div>
        )
    }

}

export default ViewProduct;