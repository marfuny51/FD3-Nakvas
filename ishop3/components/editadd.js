import React from 'react';
import PropTypes from 'prop-types';

import './editadd.css';

class EditAddProduct extends React.Component {

    static propTypes= {
        title: PropTypes.string,
        code: PropTypes.number,
        nameproduct: PropTypes.string,
        price: PropTypes.number,
        url: PropTypes.string,
        stock: PropTypes.number
    };

    state= {
        title: '',
        nameproduct: '',
        price: '',
        url: '',
        stock: '',
        errorName: '',
        errorPrice: '',
        errorUrl: '',
        errorStock: '',
        valide: true,
        changeProduct: false,
    };

    save = (EO) => {
        this.props.cbSave(this.props.code, this.props.nameproduct, this.props.price, this.props.url, this.props.stock);
    };

    cancel = (code) => {

    };

    changeName = (EO) => {
        this.setState({nameproduct: EO.target.value, changeProduct: true}, this.errorName);
    };

    changePrice = (EO) => {
        this.setState({price: EO.target.value, changeProduct: true}, this.errorPrice);
    };

    changeUrl = (EO) => {
        this.setState({url: EO.target.valu, changeProduct: true}, this.errorUrl);
    };

    changeStock = (EO) => {
        this.setState({stock: EO.target.value, changeProduct: true}, this.errorStock);
    };

    errorName = () => {
        if (!this.state.nameproduct.match(/^[A-Za-z]+$/)) {
            this.setState({errorName:'Name should includes only letters!', valide: false}); 
        }
        else {
            this.setState({errorName:'', valide: true});
        }
    };

    errorPrice = () => {
        if (!(String(this.state.price)).match(/^[0-9]{1,5}$/)) {
            this.setState({errorPrice:'Price should includes of no more than 5 numerals. Do not enter letters!', valide: false});
        }
        else {
            this.setState({errorPrice:'', valide: true});
        }
    }

    errorUrl = () => {
        if (!this.state.url.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)) {
            this.setState({errorUrl:'Url should start with http://!', valide: false});
        }
        else {
            this.setState({errorUrl:'', valide: true});
        }
    }

    errorStock = () => {
        if (!(String(this.state.stock)).match(/^[0-9]{1,10}$/)) {
            this.setState({errorStock:'Stock should includes of no more than 10 numerals. Do not enter letters!', valide: false});
        }
        else {
            this.setState({errorStock:'', valide: true});
        }
    }

    render() {
        return (
            <div key={this.props.code} className='EditAddProduct'>
                <span>{this.props.title}</span><br/>
                <span>ID: </span><span>{this.props.code}</span><br/>
                <span>Name: </span><input type='text' defaultValue={this.props.nameproduct} onChange= {this.changeName}/><span>{this.state.errorName}</span><br/>
                <span>Price: </span><input type='text' defaultValue = {this.props.price} onChange= {this.changePrice}/><span>{this.state.errorPrice}</span><br/>
                <span>URL: </span><input type='text' defaultValue = {this.props.url} onChange= {this.changeUrl}/><span>{this.state.errorUrl}</span><br/>
                <span>Quantity: </span><input type='text' defaultValue = {this.props.stock} onChange= {this.changeStock}/><span>{this.state.errorStock}</span><br/>
                <input type='button' value='Save' onClick={this.save} disabled = {(this.state.valide)?false:true}/>
                <input type='button' value='Cancel' onClick={this.cancel}/>
            </div>
        )
    }

}

export default EditAddProduct;