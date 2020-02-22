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

    getInitialState: function() {
        return { 
          selectedChooseLine: null,
          
        };
      },

    lineSelected: function(code) {
        console.log('выбран строка с кодом '+ code);
        this.setState( {selectedChooseLine:code} );
      },

    render: function() {
        var productsCode=this.props.products.map( v =>
            React.createElement(Goods, {key:v.code,
                nameproduct:v.nameproduct, price:v.price, code:v.code,
                url:v.url, stock:v.stock,
                cbSelected:this.lineSelected,
                selectedLineCode:this.state.selectedLineCode, 
            })
          );
        
        return React.DOM.div({className:'Ishop2'},
        React.DOM.div( {className:'NameShop'}, this.props.nameShop),
        React.DOM.div({className:'MainCont'},
        React.DOM.table( {className:'Title'}, 
            React.DOM.tr({className:'Title2'},
                React.DOM.th({className:'PrName'}, 'Name'),
                React.DOM.th({className:'Price'}, 'Price'),
                React.DOM.th({className:'URL'}, 'URL'),
                React.DOM.th({className:'Stock'}, 'Quantity'),
                React.DOM.th({className:'Control'}, 'Control'),
            ),
        ),
        React.DOM.table( {className:'GoodsTable'}, productsCode),

        ),
        );
    },
});