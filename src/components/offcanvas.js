import React, { Component } from 'react';
import '../App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Offcanvas extends Component {

  constructor() {
    super();
    this.state={
      open: true,
    };
  }

  render() {
    
    if (this.state.open === false) {
      return (
        <div className="bg">
        <button className="button" onClick={this.slideIn.bind(this)}>X</button>
          <div className="offcanvas" >
             <ReactCSSTransitionGroup transitionName="" transitionEnterTimeout={300} transitionLeaveTimeout={300} transitionAppear={true} transitionAppearTimeout={300}>  
            <ul className="main-menu">
              <li> menu </li>
              <li> menu </li>
              <li> menu </li>
              <li> menu </li>
            </ul>
            </ReactCSSTransitionGroup>
          </div>
        </div>
      )
    }else {
      return ( 
      <div className="bg"> <button className="button" onClick={this.slideOut.bind(this)}>MENU</button></div>
        )
      }
    }

  slideOut(e){
    e.preventDefault();
    this.setState({open: false})
  }

  slideIn(e){
    e.preventDefault();
    this.setState({open: true})
  }
  
  }

  export default Offcanvas;
