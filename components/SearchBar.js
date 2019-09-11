import React, { Component, Fragment } from 'react';
import { getResults } from '../lib/db';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.props.triggerSearch();
    }
  };

  render() {
    return (
      <Fragment>
        <div className="columns">
          <div className="column">
            <div className="columns is-vcentered">
              <div className="column">
                {/* <span className="subtitle">Searching for:</span> */}
                <span
                  id="search__term"
                  className="subtitle has-text-weight-bold"
                >
                  {` `}
                </span>
                {/* <br />
                <br /> */}
                {/* <span className="help">Filtering for:</span> */}
                <div className="filter__tags">{/* add tags */}</div>
              </div>
              <div className="column">
                <form
                  className="field has-addons search__div"
                  onSubmit={e => {
                    e.preventDefault();
                  }}
                >
                  <div className="control is-expanded">
                    <input
                      ref={this.searchRef}
                      className="input search__field"
                      type="text"
                      placeholder="Search Database..."
                      onChange={e => {
                        this.props.saveSearchResult(e.target.value);
                      }}
                      onKeyDown={this._handleKeyDown}
                    />
                  </div>
                  <div className="control">
                    <a
                      className="button is-info search__button"
                      onClick={e => {
                        this.props.triggerSearch();
                      }}
                    >
                      Search
                    </a>
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
