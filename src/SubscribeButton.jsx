import React, { Component } from 'react'
import './App.css'
class SubscribeButton extends Component {
  state = {
    text: "Click here",
  };
 
  render() {
    const { text } = this.state;
    return (
      <button type="button">
        {text}
      </button>
    );
  }
 }
 export default SubscribeButton