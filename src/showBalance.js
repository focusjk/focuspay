import React, { Component } from 'react';

class ShowBalance extends Component {
    render () {
        return(
            <div>
                { this.props.recentBalance }
            </div>
        );
    }
}

export default ShowBalance;