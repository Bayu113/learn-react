import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Chat from './pages/Chat';
import ShapeGenerator from './pages/ShapeGenerator'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={ProductList} />
        <Route path="/chat" component={Chat} /> 
        <Route path="/ShapeGenerator" component={ShapeGenerator} />
      </BrowserRouter>
    );
  }
}

export default App;

// Use <React.Fragment> 
// Import React, {Component} from 'react'; => Another Style