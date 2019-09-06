import React, { Component, Fragment } from 'react';
import { getResults } from '../lib/db';
import List from '../components/List';

export default class Display extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     arr: []
  //   };
  // }

  // componentDidMount() {
  //   // Pull the results, place in an array, and add it to state.
  //   // TODO: take this outside cDidMount and instead trigger on search click.
  //   getResults().then(obj => {
  //     const arr = [];
  //     obj.forEach(item => {
  //       arr.push(item);
  //     });
  //     this.setState({ arr });
  //   });
  // }

  render() {
    const string = JSON.stringify(this.state.arr[0]);

    return (
      <Fragment>
        <div className="box content results__panel">
          {/* <p>{console.log(string, 'test log')}</p> */}
          {/* <p>{string}</p> */}
          <List />
        </div>

        <div className="container">
          <nav className="pagination" role="navigation" aria-label="pagination">
            <ul id="pageNumbers" className="pagination-list">
              <li>
                <a
                  id="pageNum1"
                  className="pagination-link is-current"
                  aria-label="Page 1"
                  aria-current="page"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  id="pageNum2"
                  className="pagination-link"
                  aria-label="Goto page 2"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  id="pageNum3"
                  className="pagination-link"
                  aria-label="Goto page 3"
                >
                  3
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Fragment>
    );
  }
}
