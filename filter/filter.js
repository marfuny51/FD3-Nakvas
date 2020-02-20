var Filter = React.createClass ({
    displayName: 'Filter',

    propTypes: {
        namelang: React.PropTypes.string,
        code: React.PropTypes.number,
        enterText: React.PropTypes.string,
    },
    
    getInitialState: function () {
        return { 
            ourList: this.props.langs,
            sortLangs: this.props.isSotr,
            lineLangs:this.props.enterTeaxt,
          };
    },
      
    processList: function() {
        var langs = this.props.langs.slice();
        if (this.state.lineLangs) 
            langs = langs.filter(lang => lang.indexOf(this.state.lineLangs)!=-1);
        if (this.state.sortLangs)
            langs.sort();
        this.setState({langs:langs});
    },

    cbSortLangs: function() {
        this.setState({sortLangs: true});
        this.processList;
    },

    cblineLangs: function(EO) {
        this.setState({lineLangs: EO.target.value});
        this.processList;
    },

    cbReturn: function() {
        this.setState({sortLangs: false, lineLangs: this.props.enterTeaxt});
        this.processList;
    },

    render: function() {
        var langsCode=[];
        this.props.langs.forEach(lang => {
            var langCode = 
            React.DOM.p({key:lang.code, className:'Lang'}, lang.namelang);
            langsCode.push(langCode);
        });
        return React.DOM.div( {className:'Filter'},
            React.DOM.input({type:'checkbox', onClick:this.cbSortLangs}, this.sortLangs),
            React.DOM.input({type:'text', className: 'Text', onChange:this.cblineLangs}, this.lineLangs),
            React.DOM.input({type:'button', value:'сброс', onClick:this.cbReturn}),
            React.DOM.div({className:'List'}, langsCode),
        );
    },
});