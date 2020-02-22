var Filter = React.createClass ({
    displayName: 'Filter',

    propTypes: {
        namelang: React.PropTypes.string,
        code: React.PropTypes.number,
    },
    
    getInitialState: function () {
        return { 
            ourList: this.props.langs,
            sortLangs: false,
            lineLangs:'',
          };
    },
      
    processList: function() {
        let lines = this.props.langs.slice();
        if (this.state.lineLangs!='') { 
            lines = lines.filter(line => line.namelang.indexOf(this.state.lineLangs)!=-1);
        }
        if (this.state.sortLangs == true)  {
            lines.sort(function(a,b) {return (a.namelang > b.namelang) ? 1 : ((b.namelang > a.namelang) ? -1 : 0);} ); 
        }
        this.setState({ourList: lines});
    },

    cbSortLangs: function() {
        if (this.state.sortLangs == false)
            this.setState({sortLangs: true}, this.processList);
        else this.setState({sortLangs: false}, this.processList);
    },

    cblineLangs: function(EO) {
        this.setState({lineLangs: EO.target.value.toString()}, this.processList);
    },

    cbReturn: function() {
        this.setState({sortLangs: false, lineLangs: ''}, this.processList);
    },

    render: function() {
        var langsCode=[ ];
        this.state.ourList.forEach(lang => {
            var langCode =
            React.DOM.p({key:lang.code, className:'Lang'}, lang.namelang);
            langsCode.push(langCode);
        });

        return React.DOM.div( {className:'Filter'},
            React.DOM.input({type:'checkbox', checked: this.state.sortLangs, onClick:this.cbSortLangs}),
            React.DOM.input({type:'text', className: 'Text', value: this.state.lineLangs, onChange:this.cblineLangs}),
            React.DOM.input({type:'button', value:'сброс', onClick:this.cbReturn}),
<<<<<<< HEAD
            React.DOM.div({className:'List'}, 
            this.state.ourList.forEach(lang => {
                React.DOM.p({key: lang.code, className:'Lang'}, lang.namelang);
            })
            ),
=======
            React.DOM.div({className:'List'}, langsCode),
>>>>>>> d75168a5d496349ff9286022c3b15694ebdddb20
        );
    },
});