import React, { Component } from 'react';

class Clock extends Component{
  constructor(props){
      super(props);
      this.state = {date : new Date()};
  }

  render(){
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tictac()
      ,1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tictac(){
    this.setState({
      date : new Date()
    });
  }

}

export default Clock;
