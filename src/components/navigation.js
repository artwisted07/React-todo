import React, { Component } from 'react';
import '../navigation.css';

class Navigation extends Component {
  render(){
    return(
    <nav className="navbar myNavbar">
      <div className="container-fluid">
        <div className="navbar-header">
         <span className="logo">REACT APP</span>
         <div className="menu">
          <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
         </div>
        </div>
      </div>
    </nav>
    )
  }
}

module.exports = Navigation;