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
            ),
    },

    getInitialState: function() {
        return { 
          oursProducts: this.props.products,
          newProducts: [],
          selectedCode: null,
          deleteCode: null,
        };
      },
    refresh: function() {
        this.setState( {oursProducts:this.state.newProducts});
    },

    deleteLine: function() {
        let products = this.state.oursProducts;
        products = products.filter(product => product.code !== this.state.deleteCode);
        this.setState({newProducts: products}, this.refresh);
    },

    cblineSelected: function(code) {
        this.setState( {selectedCode:code});
    },

    cblineDelete: function(code) {
        var question = confirm('Do you want to delete this product?');
        if (question== true) {
            this.setState( {deleteCode:code}, this.deleteLine);
        }  
    },

    render: function() {

        return React.DOM.div({className:'Ishop2'},
        React.DOM.div( {className:'NameShop'}, this.props.nameShop),
        React.DOM.div({className:'MainCont'},
        React.DOM.table( {className:'Title'}, 
          React.DOM.thead({className:'Thead'},
            React.DOM.tr({className:'Title2'},
                React.DOM.th({className:'PrName'}, 'Name'),
                React.DOM.th({className:'Price'}, 'Price'),
                React.DOM.th({className:'URL'}, 'URL'),
                React.DOM.th({className:'Stock'}, 'Quantity'),
                React.DOM.th({className:'Control'}, 'Control'),
            ),
          ),
        
          React.DOM.tbody( {className: 'GoodsTable'},
            this.state.oursProducts.map( v => 
                React.createElement(Goods, {key:v.code,
                nameproduct:v.nameproduct, price:v.price, code:v.code,
                url:v.url, stock:v.stock,
                cblineSelected:this.cblineSelected,
                selectedCode:this.state.selectedCode,
                cblineDelete: this.cblineDelete,
                deleteCode:this.state.deleteCode,
                }) 
           ),
          ),
        ),
        ),
        );
    },
});