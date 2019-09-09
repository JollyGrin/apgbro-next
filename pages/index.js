import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import Display from '../components/Display';
import { getResults } from '../lib/db';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchValue: '',
      searchFilters: []
    };
  }

  saveSearchResult = e => {
    this.setState({
      searchValue: e
    });
  };

  triggerSearch = () => {
    const searchInput = this.state.searchValue;
    console.log(searchInput);
    getResults(searchInput).then(obj => {
      const searchResults = [];
      // debugger;
      obj.forEach(item => {
        searchResults.push(item);
      });
      this.setState({ searchResults });
    });
  };

  componentDidMount() {
    // Pull the results, place in an searchResultsay, and add it to state.
    // TODO: take this outside cDidMount and instead trigger on search click.
    // getResults().then(obj => {
    //   const searchResults = [];
    //   obj.forEach(item => {
    //     searchResults.push(item);
    //   });
    //   this.setState({ searchResults });
    // });
  }

  render() {
    return (
      <div>
        <SearchBar
          saveSearchResult={this.saveSearchResult}
          triggerSearch={this.triggerSearch}
        />

        <br />
        <br />

        {/* Add the filters & display window */}
        <div className="columns">
          <div className="column is-3">
            <Filters />
          </div>
          <div className="column is-9">
            <Display searchResults={this.state.searchResults} />
          </div>
        </div>
      </div>
    );
  }
}
