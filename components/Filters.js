import React, { Component, Fragment } from 'react';

export default class Filters extends Component {
  render() {
    return (
      <Fragment>
        <aside className="menu">
          <p className="menu-label">Sorting Options</p>

          <div className="select">
            <select id="filter__sort">
              <option></option>
              <option>Grade (High -> Low)</option>
              <option>Grade (Low -> High)</option>
              <option>FootFall (High -> Low)</option>
              <option>FootFall (Low -> High)</option>
              <option>Yield (High -> Low)</option>
              <option>Yield (Low -> High)</option>
              <option>Catchment (High -> Low)</option>
              <option>Catchment (Low -> High)</option>
            </select>
          </div>

          <br />
          <br />

          <p className="menu-label">Select Filters</p>

          <p className="help">APG Grade</p>
          <div className="control">
            <div className="select">
              <select id="filter__grade">
                <option></option>
                <option>A++</option>
                <option>A+</option>
                <option>A</option>
                <option>A-</option>
                <option>B+</option>
                <option>B</option>
                <option>B-</option>
                <option>C+</option>
                <option>C</option>
                <option>C-</option>
                <option>D</option>
              </select>
            </div>
          </div>

          <br />
          <p className="help">Country</p>
          <div className="control">
            <div className="select">
              <select id="filter__country">
                <option></option>
                <option>France</option>
                <option>Germany</option>
                <option>Netherlands</option>
                <option>Spain</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>
          <br />

          <p className="control">
            <a id="filter__button" className="button is-info">
              Add Filters
            </a>
            <a id="filter__clear" className="button is-text">
              Clear Filters
            </a>
          </p>
        </aside>
      </Fragment>
    );
  }
}
