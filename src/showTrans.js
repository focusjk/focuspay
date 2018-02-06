import React, { Component } from 'react';

import styled from 'styled-components';

const Card = styled.div`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  color: pink;
`;


class ShowTrans extends Component {
    constructor(props){
        super(props);

    }

    render (){
        return (
            <div>
                { 
                    this.props.transaction.map((element) => {
                    return (
                    <Card>
                        <div> amount: {element.amount} </div>
                        <div>type: {element.type ? element.type.label : '-'} </div>
                        <div>category: {element.category ? element.category.label : '-'}  </div>

                    </Card>
                    )}
                    )
                }
            </div>

        );
    }
}

export default ShowTrans