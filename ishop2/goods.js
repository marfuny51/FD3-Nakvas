var Goods = React.createClass ({
    displayname: 'Goods',

    propTypes: {
        nameproduct: React.PropTypes.string,
        code: React.PropTypes.number,
        price: React.PropTypes.number,
        url: React.PropTypes.string,
        stock: React.PropTypes.number,
    },

    render: function() {
        var productsCode=[];
        productArr.forEach(product => {
            var productCode = 
            React.DOM.tr({key:product.code, className: 'Product'},
                React.DOM.td({className:'PrName'}, product.nameproduct),
                React.DOM.td({className:'Price'}, 'Price: ' + product.price + '$'),
                React.DOM.td({className:'URL'}, product.url),
                React.DOM.td({className:'Stock'}, 'Stock: ' + product.stock + 'kg'),
            );
            productsCode.push(productCode);  
        });

        return React.DOM.div( {className:'GoodsTable'}, 
        React.DOM.tr({className: 'Title'},
                React.DOM.th({className:'PrName'}, 'Name'),
                React.DOM.th({className:'Price'}, 'Price'),
                React.DOM.th({className:'URL'}, 'URL'),
                React.DOM.th({className:'Stock'}, 'Quantity'),
                React.DOM.th({className:'Control'}, 'Control'),
            ),
        React.DOM.div({className: 'Title'}, productsCode
            ),

        );

    },
});