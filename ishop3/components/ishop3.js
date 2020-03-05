import React from 'react';
import PropTypes from 'prop-types';

import './ishop3.css';

import Goods from './goods';
import ViewProduct from './view';

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
    }

    deleteLine = () => {
        let products = this.state.oursProducts;
        products = products.filter(product => product.code !== this.state.deleteCode);
        this.setState({oursProducts: products});
    }

    cblineSelected = (code) => {
        this.setState( {selectedCode:code});
    }

    cblineDelete = (code) => {
        var question = confirm('Do you want to delete this product?');
        if (question== true) {
            this.setState( {deleteCode:code}, this.deleteLine);
        }  
    }

    cblineEdit = (code) => {
        this.setState( {selectedCode:code} );
    }

    newProduct = (code) => {
        this.setState( {selectedCode:code} );
    }

    render() {

        return (
        <div className='Ishop2'>
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
        <input type='button' value='New product' onClick={this.newProduct}/>
        </div> {
        (this.state.selectedCode === this.props.code)&&
            <ViewProduct key={this.props.code}
            nameproduct={this.props.nameproduct} price={this.props.price} code={this.props.code}
            url={this.props.url} stock={this.props.stock}
            />
        }
        </div>
        );
    }
}

export default Ishop3;
