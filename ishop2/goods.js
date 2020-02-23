var Goods = React.createClass ({
    displayname: 'Goods',

    propTypes: {
        nameproduct: React.PropTypes.string,
        code: React.PropTypes.number,
        price: React.PropTypes.number,
        url: React.PropTypes.string,
        stock: React.PropTypes.number,
    },

    lineClicked: function(EO) {
        this.props.cblineSelected(this.props.code);
    },

    lineDeleted: function(EO) {
        this.props.cblineDelete(this.props.code);
    },

    render: function() {
        if (this.props.selectedCode === this.props.code) {
            return React.DOM.tr({key:this.props.code, className:'ProductChange', onClick:this.lineClicked},
                React.DOM.td({className:'PrName'}, this.props.nameproduct),
                React.DOM.td({className:'Price'}, this.props.price),
                React.DOM.td({className:'URL'}, this.props.url),
                React.DOM.td({className:'Stock'}, this.props.stock),
                React.DOM.td({className:'Control'}, 
                    React.DOM.input({className:'ButtonControl', type: 'button', value: 'Delete', onClick:this.lineDeleted}),
                    ),
                );
        }
        else {
            return React.DOM.tr({key:this.props.code, className:'Product', onClick:this.lineClicked},
                React.DOM.td({className:'PrName'}, this.props.nameproduct),
                React.DOM.td({className:'Price'}, this.props.price),
                React.DOM.td({className:'URL'}, this.props.url),
                React.DOM.td({className:'Stock'}, this.props.stock),
                React.DOM.td({className:'Control'}, 
                    React.DOM.input({className:'ButtonControl', type: 'button', value: 'Delete', onClick:this.lineDeleted}),
                ),
            );
        }
    }
});