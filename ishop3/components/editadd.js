import React from 'react';
import PropTypes from 'prop-types';

import './editadd.css';

class EditAddProduct extends React.Component {

    static propTypes= {
        code: PropTypes.number,
        nameproduct: PropTypes.string,
        price: PropTypes.number,
        url: PropTypes.string,
        stock: PropTypes.number
    };

    save = (code) => {

    };

    cancel = (code) => {

    };

    render() {
        return (
            <div key={this.props.code} className='EditAddProduct'>
                <span>Edit existing Product</span><br/>
                <span>ID: </span><span>{this.props.code}</span><br/>
                <span>Name: </span><input type='text' value = {this.props.nameproduct}/><br/>
                <span>Price: </span><input type='text' value = {this.props.price}/><br/>
                <span>URL: </span><input type='text' value = {this.props.url}/><br/>
                <span>Quantity: </span><input type='text' value = {this.props.stock}/><br/>
                <input type='button' value='Save' onClick={this.save}/>
                <input type='button' value='Cancel' onClick={this.cancel}/>
            </div>
        )
    }

}

export default EditAddProduct;