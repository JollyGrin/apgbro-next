import React, { Component, Fragment } from 'react';

export default class ModalXY extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const propList = this.props.parameters;

    return (
      <Fragment>
        {propList.map(function(parameter, index) {
          return <option key={index}>{parameter}</option>;
        })}
      </Fragment>
    );
  }
}
