var Filter = React.createClass ({
    displayName: 'Filter',

   /* propTypes: {
        langs: React.propTypes.arrayOf(
            React.propTypes.shape({
                namelang: React.PropTypes.string.isRequired,
                code: React.PropTypes.number.isRequired,
            })
        )
    },*/

    render: function() {

        var langsCode=[];
        langArr.forEach(lang => {
            var langCode = 
            React.DOM.p({key:lang.code, className:'Lang'}, lang.namelang);
            langsCode.push(langCode);
        });

        return React.DOM.div( {className:'Filter'},
            React.DOM.input({type:'checkbox'}),
            React.DOM.input({type:'text'}),
            React.DOM.input({type:'button', value:'сброс'}),
            React.DOM.div({className:'List'}, langsCode),
        );
    },
});