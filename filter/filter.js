var Filter = React.createClass ({
    displayName: 'Filter',

    propTypes: {
        namelang: React.PropTypes.string,
        code: React.PropTypes.number,
        enterText: React.PropTypes.string,
    },

    render: function() {

        var langsCode=[];
        langArr.forEach(lang => {
            var langCode = 
            React.DOM.p({key:lang.code, className:'Lang'}, lang.namelang);
            langsCode.push(langCode);
        });

        return React.DOM.div( {className:'Filter'},
            React.DOM.input({type:'checkbox'}),
            React.DOM.input({type:'text', value: , className: 'Text'}),
            React.DOM.input({type:'button', value:'сброс'}),
            React.DOM.div({className:'List'}, langsCode),
        );
    },
});