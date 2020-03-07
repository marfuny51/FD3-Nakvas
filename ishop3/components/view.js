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
            <div key={this.props.code} className='ViewProduct'>
                <span>Name: </span><span>{this.props.nameproduct}</span><br/>
                <span>Price: </span><span>{this.props.price}</span><br/>
                <span>Url: </span><span>{this.props.url}</span><br/>
                <span>Quantity: </span><span>{this.props.stock}</span><br/>
            </div>
        )
    }

}

export default ViewProduct;