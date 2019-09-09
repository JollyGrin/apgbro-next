import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import Display from '../components/Display';
import { getResults } from '../lib/db';
import { filter } from 'minimatch';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchValue: '',
      searchFilters: {
        sort: '',
        grade: '',
        country: ''
      }
    };
  }

  saveSearchResult = e => {
    this.setState({
      searchValue: e
    });
  };

  saveFilterState = ({ sort, grade, country }) => {
    this.setState({
      searchFilters: {
        sort,
        grade,
        country
      }
    });
  };

  triggerSearch = () => {
    const searchInput = this.state.searchValue;
    const filterInput = this.state.searchFilters;

    getResults({ query: searchInput, sort_prop: filterInput.sort }).then(
      obj => {
        const searchResults = [];
        obj.forEach(item => {
          searchResults.push(item);
        });
        this.setState({ searchResults });
      }
    );
  };

  componentDidMount() {}

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
            <Filters saveFilterState={this.saveFilterState} />
          </div>
          <div className="column is-9">
            <Display searchResults={this.state.searchResults} />
          </div>
        </div>
      </div>
    );
  }
}
