import React from 'react';
import PropTypes from 'prop-types';

import './ishop3.css';

import Goods from './goods';
import ViewProduct from './view';
import EditAddProduct from './editadd';

class Ishop3 extends React.Component {

    static propTypes = {
        nameShop: PropTypes.string,
        products: PropTypes.arrayOf(
            PropTypes.shape({
                nameproduct: PropTypes.string,
                code: PropTypes.number,
                price: PropTypes.number,
                url: PropTypes.string,
                stock: PropTypes.number,
            })
            ),
    };

    state = {
          oursProducts: this.props.products,
          selectedCode: null,
          deleteCode: null,
          editaddCode: null,
          mode: '', //0 -view, 1- edit, 2 - add
    }

    deleteLine = () => {
        let products = this.state.oursProducts;
        products = products.filter(product => product.code !== this.state.deleteCode);
        this.setState({oursProducts: products});
    }

    saveChange = () => {
        let products = this.state.oursProducts;
        products.map(product => {
        if (product.code === this.state.editaddCode) {
            product.nameproduct = this.props.nameproduct;
            product.price = this.props.price;
            product.url = this.props.url;
            product.stock = this.props.stock}
        })
        this.setState({oursProducts: products});
    }

    cblineSelected = (code) => {
        if(!this.props.changeProduct)
        this.setState( {selectedCode:code, mode:0});
    }

    cblineDelete = (code) => {
        var question = confirm('Do you want to delete this product?');
        if (question == true) {
            this.setState( {deleteCode:code}, this.deleteLine);
        }  
    }

    cblineEdit = (code) => {
        if(!this.props.changeProduct)
        this.setState( {editaddCode:code, mode:1} );
    }

    cbSave = (code, nameproduct, price, url, stock) => {
        this.setState( {editaddCode:code}, this.saveChange );
    };

    newProduct = (code) => {
        this.setState( {editaddCode:code, mode:2} );
    }

    render() {
        var foundProduct = this.state.oursProducts.find( p => 
                p.code === this.state.selectedCode
            );
        var editProduct = this.state.oursProducts.find( p => 
                p.code === this.state.editaddCode
            );

        return (
        <div className='Ishop3'>
        <div className='NameShop'>{this.props.nameShop}</div>
        <div className='MainCont'>
        <table className='Title'>
          <thead className='Thead'>
            <tr className='Title2'>
                <th className='PrName'>Name</th>
                <th className='Price'>Price</th>
                <th className='URL'>URL</th>
                <th className='Stock'>Quantity</th>
                <th className='Control'>Control</th>
            </tr>
          </thead>
        
          <tbody className= 'GoodsTable'>
            {this.state.oursProducts.map( v => 
                <Goods key={v.code}
                nameproduct={v.nameproduct} price={v.price} code={v.code}
                url={v.url} stock={v.stock}
                cblineSelected={this.cblineSelected}
                selectedCode={this.state.selectedCode}
                cblineDelete= {this.cblineDelete}
                deleteCode={this.state.deleteCode}
                cblineEdit={this.cblineEdit}
                />
           )}
          </tbody>
        </table>
        <input type='button' value='New product' onClick={this.newProduct} disabled={(this.state.mode!==0)?true:false}/>
        </div> 
        {
            (this.state.mode===0)&&
            <ViewProduct {...foundProduct}/>
        }    
        {
            (this.state.mode===1)&&
            <EditAddProduct key={editProduct.code}
            title='Edit existing Product'
            nameproduct={editProduct.nameproduct} price={editProduct.price} code={editProduct.code}
            url={editProduct.url} stock={editProduct.stock} cbSave={this.cbSave}/>
        }     
        {
            (this.state.mode===2)&&
            <EditAddProduct key={this.state.oursProducts.lenght+1}
            title='Add new product'
            nameproduct='' price='' code='7'
            url='' stock=''/>
        }     
        </div>
        );
    }
}

export default Ishop3;

