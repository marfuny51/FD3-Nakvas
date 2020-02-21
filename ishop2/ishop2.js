var Ishop2 = React.createClass ({
    displayName: 'Ishop2',

    propTypes: {
        nameShop: React.PropTypes.string,
        products: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                nameproduct: React.PropTypes.string,
                code: React.PropTypes.number,
                price: React.PropTypes.number,
                url: React.PropTypes.string,
                stock: React.PropTypes.number,
            })
    )
    },

    render: function() {

        var productsCode = this.props.products.map( v =>
            React.createElement(Goods, {key:v.code, nameproduct:v.nameproduct, price:v.price, url:v.url, stock:v.stock})
        );
        return React.DOM.div({className:'Ishop2'},
        React.DOM.div( {className:'NameShop'}, this.props.nameShop),
        React.DOM.table( {className:'Goods'}, productsCode),
        );
    },
});