import 'react-select/dist/react-select.css';

import React, { Component } from 'react';

import Select from 'react-select';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
    boder: 2px solid pink;
    background: papayawhip;
`;


class AddTrans extends Component {
  constructor(props){
    super(props);
    this.state = {
        trans: {      
            type: {value: 1, label: 'expense'},
            category: null,
            amount: null,
            note: '',
            date: '',
        },

    };
    
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeNote = this.onChangeNote.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onCategChange = this.onCategChange.bind(this);
    this.categOptionForExpense = this.categOptionForExpense.bind(this);
    this.categOptionForIncome = this.categOptionForIncome.bind(this);

    
  }

  onTypeChange(type) {
    this.setState({
        trans: {
            ...this.state.trans,
            type: type,
            category: null,
        }
    });
    console.log("focus");
  }

  onCategChange(categ){
      this.setState({
          trans: {
              ...this.state.trans,
              category: categ,
          }
      });
  }


  onChangeAmount() {
    this.setState({
        trans: {
            ...this.state.trans,
            amount: this.refs.amount.value,
        },
    });
  }

  onChangeNote() {
    this.setState({
        trans: {
            ...this.state.trans,
            note: this.refs.note.value,
        }
    });
  }

  categOptionForExpense() {
      return [
        {value: 1, label: 'food'},
        {value: 2, label: 'transportation'},
        {value: 3, label: 'shopping'},
        {value: 4, label: 'love'},
        {value: 5, label: 'others'},
      ];
  }

  categOptionForIncome() {
      return [
        {value: 1, label: 'salary'},
        {value: 2, label: 'extra income'},
        {value: 3, label: 'gift'},
        {value: 4, label: 'love'},
        {value: 5, label: 'others'},
      ];
  }
  render() {

    return (
      <div>
        <Select  
            options = {[
                {value: 1, label: 'expense'},
                {value: 2, label: 'income'}
            ]}
            value = { this.state.trans.type }
            placeholder = "select type"
            onChange = { this.onTypeChange }
            clearable = { false }
        />

        <Select  
            options = { this.state.trans.type.value == 1 ? this.categOptionForExpense() : this.categOptionForIncome()}
            value = { this.state.trans.category }
            placeholder = "select category"
            onChange = { this.onCategChange }
            clearable = { false }
        />
       
        <Input 
            type="number" 
            ref="amount" 
            placeholder= "amount"
            value={this.state.trans.amount} 
            onChange={() => this.onChangeAmount()} 
        

        />

        <input type="text" ref="note" placeholder="note" value={this.state.trans.note} onChange={() => this.onChangeNote()} />
        
        <Button onClick={() => this.props.addNewTrans(this.state.trans)} >
                SAVE
        </Button>
  

      </div>
    );
  }
}

export default AddTrans;
