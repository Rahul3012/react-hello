import React, { Component } from 'react';
class TikTakToeChild extends Component {
    changeSign()
    {
        this.props.changeSign(this.props.id,this.props.sign);
    }
    render() { 
        return (<button id={this.props.id} onClick={this.changeSign.bind(this)}>
            {this.props.sign}
        </button>  );
    }
}
 
export default TikTakToeChild;