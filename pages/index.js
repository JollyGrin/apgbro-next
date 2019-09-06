import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import Display from '../components/Display';

export default class index extends Component {
  render() {
    return (
      <div>
        <SearchBar />

        <br />
        <br />

        {/* Add the filters & display window */}
        <div className="columns">
          <div className="column is-3">
            <Filters />
          </div>
          <div className="column is-9">
            <Display />
          </div>
        </div>
      </div>
    );
  }
}
