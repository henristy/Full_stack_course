import React, { Component } from 'react'

export default class SearchBar extends Component { 

    state = {
        query:'',
    }

    handleQuery=(e)=> {
        this.setState({query: e.target.value});
        return (this.state.query);
    }

  render() {
    return (
        <form>
            <input type="text" placeholder="search for anything..." value ={this.state.query} onChange={this.handleQuery} />
        </form>
    )
  }
}
