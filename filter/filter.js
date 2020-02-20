var Filter = React.createClass ({
    displayName: 'Filter',

    propTypes: {
        namelang: React.PropTypes.string,
        code: React.PropTypes.number,
        enterText: React.PropTypes.string,
    },
    
    let langsCode=[];
        langArr.forEach(lang => {
            langsCode.push(lang);
        });  
    

    getInitialState: function () {
        return { 
            ourList: this.props.langs,
            sortLangs: false,
            lineLangs:'dff',
          };
    },
      
    processList: function() {
        var langs = this.props.langs.slice();
        if (this.state.lineLangs) 
            langs = langs.filter(lang => lang.indexOf(this.state.lineLangs)!=-1);
        if (this.state.sortLangs)
            langs.sort();
        this.setState({ourList:langs});
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
        return React.DOM.div( {className:'Filter'},
            React.DOM.input({type:'checkbox', onClick:this.cbSortLangs}),
            React.DOM.input({type:'text', className: 'Text', value: this.lineLangs, onChange:this.cblineLangs}),
            React.DOM.input({type:'button', value:'сброс', onClick:this.cbReturn}),
            React.DOM.div({className:'List'}, 
            langsCode.forEach(lang => {
                React.DOM.p({className:'Lang'}, lang);
            })
            ),
        );
    },
});