var Goods = React.createClass ({
    displayname: 'Goods',


    propTypes: {
        nameproduct: React.PropTypes.string,
        code: React.PropTypes.number,
        price: React.PropTypes.number,
        url: React.PropTypes.string,
        stock: React.PropTypes.number,
        lineClicked: React.PropTypes.func,
        lineDeleted: React.PropTypes.func
    },


    lineClicked: function(EO) {
        this.props.cblineSelected(this.props.code);
    },


    lineDeleted: function(EO) {
        this.props.cblineDelete(this.props.code);
    },


    render: function() {
        return React.DOM.tr({key:this.props.code, className:(this.props.selectedCode === this.props.code)?'ProductChange':'Product', onClick:this.lineClicked},
                  React.DOM.td({className:'PrName'}, this.props.nameproduct),
                  React.DOM.td({className:'Price'}, this.props.price),
                  React.DOM.td({className:'UR'}, this.props.url),
                  React.DOM.td({className:'Stoc'}, this.props.stock),
                  React.DOM.td({className:'Contro'}, 
                    React.DOM.input({className:'ButtonContro', type: 'button', value: 'Delete', onClick:this.lineDeleted}),
                    ),
               );
    }
});
