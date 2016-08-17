import React, { Component } from 'react';
import Rebase from 're-base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';

const base = Rebase.createClass({
    apiKey: "AIzaSyAr-Y52cMXx5agTjdXjvHhADwYGLzehrL8",
    authDomain: "todo-list-df2f0.firebaseapp.com",
    databaseURL: "https://todo-list-df2f0.firebaseio.com",
    storageBucket: "todo-list-df2f0.appspot.com",
});


class AnimatedShoppingList extends Component{
  constructor(){
    super(...arguments);
    this.state = {
      items:[]
    }
  }
  
  
  componentDidMount(){
    base.syncState(`todo-list-df2f0`, {
    context: this,
    state: 'items',
    asArray: true
  });
  }
  
  addItem(e){
    if(e.key === "Enter"){
      let newItem = {id: Date.now(), name: e.target.value }
      this.setState({
          items: this.state.items.concat([newItem]) //updates Firebase and the local state
      });
      e.target.value = "";
    
    }
  }
  
  handleRemove(i){
   let newItems = this.state.items;
   newItems.splice(i,1);
   this.setState({items:newItems});
  }
  
  render(){
    let shoppingItems = this.state.items.map((item,i)=> (
     <div key={item.id} className="item" onClick={this.handleRemove.bind(this,i)}>{item.name}</div>
    ));
    
    
    return(
    <div className="col-md-12">
      <h2>Shopping List</h2>
      <input type="text" value={this.state.newItem} onKeyDown={this.addItem.bind(this)} placeholder="Add Item" />
    <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={300} >  
    {shoppingItems}
   </ReactCSSTransitionGroup>
      </div>
    )
  }
}



class App extends Component {
  render() {
    return (
  
      <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={300} transitionAppear={true} transitionAppearTimeout={300}>  
        <AnimatedShoppingList/>
     </ReactCSSTransitionGroup>
    
    );
  }
}

export default App;
