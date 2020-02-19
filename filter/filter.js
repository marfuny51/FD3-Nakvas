var Filter = React.createClass ({
    displayName: 'Filter',

    propTypes: {
        namelang: React.PropTypes.string,
        code: React.PropTypes.number,
        enterText: React.PropTypes.string,
    },

    sortList: function(EO) {
        this.setState( {langs:langArr.sort()} );
    },

    findInList: function() {

    },

    render: function() {
        
        var langsCode=[];
        langArr.forEach(lang => {
            var langCode = 
            React.DOM.p({key:lang.code, className:'Lang'}, lang.namelang);
            langsCode.push(langCode);
        });

        return React.DOM.div( {className:'Filter'},
            React.DOM.input({type:'checkbox', onClick:this.sortList}),
            React.DOM.input({type:'text', className: 'Text', onChange:this.findInList}),
            React.DOM.input({type:'button', value:'сброс'}),
            React.DOM.div({className:'List'}, langsCode),
        );
    },
});