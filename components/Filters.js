import React, { Component, Fragment } from 'react';

export default class Filters extends Component {
  sortRef = React.createRef();

  gradeRef = React.createRef();

  countryRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      searchFilters: {
        sort: '',
        grade: '',
        country: ''
      }
    };
  }

  grabFilterState = () => {
    const sort = this.sortRef.current.value;
    const grade = this.gradeRef.current.value;
    const country = this.countryRef.current.value;

    this.props.saveFilterState({ sort, grade, country });
  };

  render() {
    return (
      <Fragment>
        <aside className="menu">
          <p className="menu-label">Sorting Options</p>

          <div className="select">
            <select
              ref={this.sortRef}
              id="filter__sort"
              onChange={this.grabFilterState}
            >
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
              <select
                ref={this.gradeRef}
                id="filter__grade"
                onChange={this.grabFilterState}
              >
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
              <select
                ref={this.countryRef}
                id="filter__country"
                onChange={this.grabFilterState}
              >
                <option></option>
                <option>France</option>
                <option>Germany</option>
                <option>Netherlands</option>
                <option>Spain</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>
        </aside>
      </Fragment>
    );
  }
}
