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
        stock: PropTypes.number,
    };

    state= {
        title: '',
        nameproduct: this.props.nameproduct,
        price: this.props.price,
        url: this.props.url,
        stock: this.props.stock,
        errorName: '',
        errorPrice: '',
        errorUrl: '',
        errorStock: '',
        button: '',
        valide: true,
        changeProduct: false,
    };

    save = (EO) => {
        this.state.changeProduct = false;
        this.props.cbSave(this.props.code, this.state.nameproduct, this.state.price, this.state.url, this.state.stock, this.state.changeProduct);
    };

    cancel = (EO) => {
        this.state.changeProduct = false;
        this.props.cbCancel(this.props.code, this.state.nameproduct, this.state.price, this.state.url, this.state.stock, this.state.changeProduct);
    };

    changeName = (EO) => {
        if(this.props.nameproduct===EO.target.value) {
            this.setState({changeProduct: false});
        }
        else {
            this.setState({nameproduct: EO.target.value, changeProduct: true}, this.errorName);
        }
        this.props.cbChange(this.state.changeProduct);
    };

    changePrice = (EO) => {
        if(this.props.price===EO.target.value) {
            this.setState({changeProduct: false});
        }
        else {
            this.setState({price: EO.target.value, changeProduct: true}, this.errorPrice);
        }
        this.props.cbChange(this.state.changeProduct);
    };

    changeUrl = (EO) => {
        if(this.props.url===EO.target.value) {
            this.setState({changeProduct: false});
        }
        else {
            this.setState({url: EO.target.value, changeProduct: true}, this.errorUrl);
        }
        this.props.cbChange(this.state.changeProduct);
    };

    changeStock = (EO) => {
        if(this.props.stock===EO.target.value) {
            this.setState({changeProduct: false});
        }
        else {
            this.setState({stock: EO.target.value, changeProduct: true}, this.errorStock);
        }
        this.props.cbChange(this.state.changeProduct);
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
                <input type='button' value={this.props.button} onClick={this.save} disabled = {(this.state.valide)?false:true}/>
                <input type='button' value='Cancel' onClick={this.cancel}/>
            </div>
        )
    }

}

export default EditAddProduct;