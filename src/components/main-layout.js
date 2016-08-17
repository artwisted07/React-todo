import React, { Component } from 'react';
import Navigation from './navigation';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MainLayout extends Component{
  render(){
    return(
   <div>
      <Navigation/>
      <div className="container"> {this.props.children}</div>
      </div>
    )
  }
}


export default MainLayout;
