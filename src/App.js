import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <h1>Please wait while loading...</h1>
        </div>
      )
    } 
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

export default App;
