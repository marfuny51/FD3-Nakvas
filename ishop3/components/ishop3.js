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
                mode: PropTypes.number,
            })
            ),
    };

    state = {
          oursProducts: this.props.products,
          selectedCode: null,
          deleteCode: null,
          editaddCode: null,
          mode: null, //0 -view, 1- edit, 2 - add
          changeproduct: false,
    }

    deleteLine = () => {
        let products = this.state.oursProducts;
        products = products.filter(product => product.code !== this.state.deleteCode);
        this.setState({oursProducts: products, mode:''});
    }

    cblineSelected = (code) => {
        if(this.state.changeproduct===false) {
        this.setState( {selectedCode:code, mode:0});
        }
    }

    cblineDelete = (code) => {
        var question = confirm('Do you want to delete this product?');
        if (question == true) {
            this.setState( {deleteCode:code}, this.deleteLine);
        }  
    }

    cblineEdit = (code) => {
        if(this.state.changeproduct===false) {
        this.setState( {editaddCode:code, mode:1} );
        }
    }

    cbChange = (changeProduct) => {
        this.setState({changeproduct:changeProduct});
    }

    cbSave = (code, nameproduct, price, url, stock) => {
        let products = this.state.oursProducts;
        if (this.state.mode===1) {
            products.forEach(product => {
                if (product.code === code) {
                    product.nameproduct = nameproduct;
                    product.price = parseInt(price);
                    product.url = url;
                    product.stock = stock}
            })
        };
        if (this.state.mode===2) {
            let newObject = {code:products.length+1, nameproduct: nameproduct, price: parseInt(price), url: url, stock: stock}; 
            products.push(newObject);
        }
        this.setState({editaddCode:code, mode:'', oursProducts: products, changeproduct: false});
    };

    cbCancel = (code) => {
        let products = this.state.oursProducts;
        this.setState({editaddCode:code, mode:'', oursProducts: products, changeproduct: false});
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
                mode={this.state.mode}
                cblineSelected={this.cblineSelected}
                selectedCode={this.state.selectedCode}
                cblineDelete= {this.cblineDelete}
                deleteCode={this.state.deleteCode}
                editaddCode={this.state.editaddCode}
                cblineEdit={this.cblineEdit}
                />
           )}
          </tbody>
        </table>
        <input type='button' value='New product' onClick={this.newProduct} disabled={(this.state.mode===1||this.state.mode===2)?true:false}/>
        </div> 
        {
            (this.state.mode===0)&&
            <ViewProduct {...foundProduct}/>
        }    
        {
            (this.state.mode===1)&&
            <EditAddProduct key={editProduct.code}
            mode={this.state.mode}
            title='Edit existing Product'
            nameproduct={editProduct.nameproduct} 
            price={editProduct.price} 
            code={editProduct.code} 
            url={editProduct.url} 
            stock={editProduct.stock} 
            button='Save' 
            editaddCode={this.state.editaddCode} 
            cblineEdit={this.cblineEdit} 
            cbSave={this.cbSave} 
            cbCancel={this.cbCancel}
            cbChange={this.cbChange}/>
        }     
        {
            (this.state.mode===2)&&
            <EditAddProduct key={this.props.code}
            mode={this.state.mode}
            title='Add new product'
            button='Add' 
            editaddCode={this.state.editaddCode} 
            cblineEdit={this.cblineEdit} 
            cbSave={this.cbSave} 
            cbCancel={this.cbCancel}
            cbChange={this.cbChange}/>
        }     
        </div>
        );
    }
}

export default Ishop3;

