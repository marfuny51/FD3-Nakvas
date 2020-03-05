import React from 'react';
import PropTypes from 'prop-types';

import './ishop3.css';

class Goods extends React.Component {

    static propTypes= {
        nameproduct: PropTypes.string,
        code: PropTypes.number,
        price: PropTypes.number,
        url: PropTypes.string,
        stock: PropTypes.number,
        lineClicked: PropTypes.func,
        lineDeleted: PropTypes.func
    };

    lineClicked = (EO) => {
        this.props.cblineSelected(this.props.code);
    };

    lineDeleted = (EO) => {
        this.props.cblineDelete(this.props.code);
    };

    lineEdit = (EO) => {
        this.props.cblineEdit(this.props.code);
    };

    render() {
        return (
            <tr key={this.props.code} className={(this.props.selectedCode === this.props.code)?'ProductChange':'Product'} onClick={this.lineClicked}>
                <td className='PrName'>{this.props.nameproduct}</td>
                <td className='Price'>{this.props.price}</td>
                <td className='UR'>{this.props.url}</td>
                <td className='Stoc'>{this.props.stock}</td>
                <td className='Contro'>
                    <input className='ButtonContro' type='button' value='Delete' onClick={this.lineDeleted}/>
                    <input className='ButtonContro' type='button' value='Edit' onClick={this.lineEdit}/>
                </td>
            </tr>
        )
    }

}

export default Goods;
