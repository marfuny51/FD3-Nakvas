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
        lineDeleted: PropTypes.func,
        lineEdit: PropTypes.func
    };

    lineClicked = (EO) => {
        this.props.cblineSelected(this.props.code);
    };

    lineDeleted = (EO) => {
        this.props.cblineDelete(this.props.code);
    };

    lineEdit = (EO) => {
        EO.stopPropagation();
        this.props.cblineEdit(this.props.code);
    };

    render() {
        return (
            <tr key={this.props.code} className={(this.props.selectedCode === this.props.code)?'ProductChange':'Product'} onClick={this.lineClicked}>
                <td>{this.props.nameproduct}</td>
                <td>{this.props.price}</td>
                <td>{this.props.url}</td>
                <td>{this.props.stock}</td>
                <td className='Control'>
                    <input className='ButtonContro2' type='button' value='Edit' onClick={this.lineEdit}/>
                    <input className='ButtonContro' type='button' value='Delete' onClick={this.lineDeleted}/>
                </td>
            </tr>
        )
    }

}

export default Goods;
