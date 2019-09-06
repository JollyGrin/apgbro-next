import React, { Component, Fragment } from 'react';

export default class ListItem extends Component {
  render() {
    return (
      <Fragment>
        <article className="post">
          <a className="result__title">Title</a>
          <div className="media-content">
            <div className="content">
              <p>
                Grade APG/External:
                <span className="tag">A+</span>
                GLA:
                <span className="tag">100</span>
                Footfall:
                <span className="tag">Medium</span>
                <br />
              </p>
            </div>
          </div>
        </article>
      </Fragment>
    );
  }
}
