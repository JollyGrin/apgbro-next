import ListItem from './ListItem';
import React, { Component, Fragment } from 'react';

export default class List extends Component {
  render() {
    return (
      <Fragment>
        <ListItem />
        <ListItem />
        <ListItem />
      </Fragment>
    );
  }
}
