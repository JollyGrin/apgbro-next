import React, { Component } from 'react';

class Page extends Component {
  render() {
    return (
      <div>
        <main className="test">{this.props.children}</main>
      </div>
    );
  }
}

export default Page;
