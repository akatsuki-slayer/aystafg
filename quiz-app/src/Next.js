import React from 'react';

export default class Next extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        if (this.props.hasAnswered) {
            this.props.onClick(1);
        }
    }
    
    render(){
        return(
            <button className = 'nextButton' onClick={this.handleClick}>
                Next &raquo;
            </button>
        );
    }
}