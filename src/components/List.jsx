import React, { Component } from 'react';
import Card from './Card';
import data from '../dummy.json';
import './list.css';

class List extends Component {
  state = {
    list: data,
    search: '',
  }

  updateSearch = (event) => {
    this.setState({search: event.target.value});
  }

  render = () => {
    let filteredCustomer = this.state.list.filter(
      customer => {
        return customer.username.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <div className="container">
        <input
          className="searchBar"
          type='text'
          placeholder='who are you looking for?'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />

        <ul className="list">
          {filteredCustomer.map((customer, index) =>
            <Card 
              key={customer.id}
              picture={customer.picture}
              name={customer.username}
            />
          )}
        </ul>
      </div>
    )
  }
}

export default List;
