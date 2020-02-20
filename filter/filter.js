var Filter = React.createClass ({
    displayName: 'Filter',

    propTypes: {
        namelang: React.PropTypes.string,
        code: React.PropTypes.number,
        enterText: React.PropTypes.string,
    },

    getInitialState: function () {
        return { 
            ourList: this.langs,
            sortLangs: this.props.isSotr,
            lineLangs:this.props.enterTeaxt,
          };
    },
      
    processList: function() {
        var lines=this.props.langs.slice();
        if (this.state.lineLangs) 
            lines = lines.filter(line => line.indexOf(this.state.lineLangs)!=-1);
        if (this.state.sort)
            lines.sortLangs();
        this.setState({lines:lines});
    },

    render: function() {
        var langsCode=[];
        langArr.forEach(lang => {
            var langCode = 
            React.DOM.p({key:lang.code, className:'Lang'}, lang.namelang);
            langsCode.push(langCode);
        });
        return React.DOM.div( {className:'Filter'},
            React.DOM.input({type:'checkbox'}, this.sortLangs),
            React.DOM.input({type:'text', className: 'Text'}, this.lineLangs),
            React.DOM.input({type:'button', value:'сброс'}),
            React.DOM.div({className:'List'}, langsCode),
        );
    },
});