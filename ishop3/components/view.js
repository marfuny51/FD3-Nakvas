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
            <div>
                <div className='PrName'>{this.props.nameproduct}</div>
                <div className='Price'>{this.props.price}</div>
                <div className='UR'>{this.props.url}</div>
                <div className='Stoc'>{this.props.stock}</div>
            </div>
        )
    }

}

export default ViewProduct;