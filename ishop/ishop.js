var Ishop = React.createClass({
    displayName: 'Ishop',

    /*propTypes: {
        nameShop: React.PropTypes.string.isRequired,
            
        products:React.PropTypes.arrayOf(
          React.PropTypes.shape({
            nameproduct: React.PropTypes.string.isRequired,
            code: React.PropTypes.number.isRequired,
            price: React.PropTypes.number.isRequired,
            stock: React.PropTypes.number.isRequired,
          })
        )
    },*/

    render: function() {

        var productsCode=[];
        productArr.forEach(product => {
            var productCode = 
            React.DOM.div({key:product.code, className: 'Product'},
                React.DOM.span({className:'PrName'}, product.nameproduct),
                React.DOM.span({className:'Price'}, 'Price: ' + product.price + '$'),
                React.DOM.span({className:'Stock'}, 'Stock: ' + product.stock + 'kg'),
                React.DOM.img({className:'Foto', src: product.foto}),
            );
            productsCode.push(productCode);  
        });
        
        return React.DOM.div( {className:'Ishop'},
            React.DOM.div( {className:'NameShop'}, this.props.nameShop),
            React.DOM.div( {className:'Products'}, productsCode),
        );
    },
});