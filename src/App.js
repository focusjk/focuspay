import './App.css';

import React, { Component } from 'react';

import AddTrans from './addTrans';
import ShowBalance from './showBalance'
import ShowTrans from './showTrans';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recentBalance: 0,
      monthBalance: 0,
      transaction: [],

    };

    this.addNewTrans = this.addNewTrans.bind(this);

  }

  addNewTrans (newTrans) {
    let copyTrans = this.state.transaction;
    console.log(newTrans);
    copyTrans.push(newTrans);
    this.setState({
      transaction: copyTrans,
      recentBalance: newTrans.type.value == 1 ? parseInt(this.state.recentBalance)-parseInt(newTrans.amount) : parseInt(this.state.recentBalance)+parseInt(newTrans.amount),
    });
  }

  render() {
    return (
      <div>
        <AddTrans addNewTrans={this.addNewTrans} />
        <ShowBalance recentBalance={this.state.recentBalance} />
        <ShowTrans transaction={this.state.transaction} />

      
      </div>
    );
  }
}

export default App;
