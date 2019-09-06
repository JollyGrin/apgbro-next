import React, { Component, Fragment } from 'react';
import { getResults } from '../lib/db';

export default class SearchBar extends Component {
  render() {
    return (
      <Fragment>
        <div className="columns">
          <div className="column">
            <div className="columns is-vcentered">
              <div className="column">
                <span className="subtitle">Searching for:</span>
                <span
                  id="search__term"
                  className="subtitle has-text-weight-bold"
                >
                  {` `}Malls in Barcelona
                </span>
                <br />
                <br />
                <span className="help">Filtering for:</span>
                <div className="filter__tags">{/* add tags */}</div>
              </div>
              <div className="column">
                <form className="field has-addons search__div">
                  <div className="control is-expanded">
                    <input
                      className="input search__field"
                      type="text"
                      placeholder="Search Database..."
                    />
                  </div>
                  <div className="control">
                    <a className="button is-info search__button">Search</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
