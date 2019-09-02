import React, { Component } from 'react';
import TheHead from './TheHead';
import TheNav from './TheNav';

class Page extends Component {
  render() {
    return (
      <div>
        <TheHead />
        <TheNav />
        <main className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1 is-mobile">
              {this.props.children}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Page;
