import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar, Row, Col} from 'react-onsenui';
import {notification} from 'onsenui';

import './style.css'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [[0,0,0],[0,0,0],[0,0,0]],
      turn: 0,
    }
    this.setData = this.setData.bind(this);
    this.makeMark = this.makeMark.bind(this);
  }
  setData(col, row){
    var s = this.state;
    if(this.turn%2==0){
      s.data[col][row] = 1;
    }
    else{
      s.data[col][row] = -1;
    }
    this.turn = !this.turn;
    this.setState(s);
  }
  makeMark(d){
    if(d==1){
      return '○';
    }
    else if(d == -1){
      return '✖️';
    }
    else{
      return ' ';
    }
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Onsen UI</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Row>
        <Col className="box" onClick={()=>this.setData(0,0)}>{this.makeMark(this.state.data[0][0])}</Col>
        <Col className="box" onClick={()=>this.setData(0,1)}>{this.makeMark(this.state.data[0][1])}</Col>
        <Col className="box" onClick={()=>this.setData(0,2)}>{this.makeMark(this.state.data[0][2])}</Col>
        </Row>
        <Row>
        <Col className="box" onClick={()=>this.setData(1,0)}>{this.makeMark(this.state.data[1][0])}</Col>
        <Col className="box" onClick={()=>this.setData(1,1)}>{this.makeMark(this.state.data[1][1])}</Col>
        <Col className="box" onClick={()=>this.setData(1,2)}>{this.makeMark(this.state.data[1][2])}</Col>
        </Row>
        <Row>
        <Col className="box" onClick={()=>this.setData(2,0)}>{this.makeMark(this.state.data[2][0])}</Col>
        <Col className="box" onClick={()=>this.setData(2,1)}>{this.makeMark(this.state.data[2][1])}</Col>
        <Col className="box" onClick={()=>this.setData(2,2)}>{this.makeMark(this.state.data[2][2])}</Col>
        </Row>
      </Page>
    );
  }
}