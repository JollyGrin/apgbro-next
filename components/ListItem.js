import React, { Component, Fragment } from 'react';

export default class ListItem extends Component {
  resultTitle = React.createRef();

  saveModalTitle = () => {
    this.props.triggerModal(this.resultTitle.current.innerText);
    // console.log(this.resultTitle.current.innerText);
    // console.log('test');
  };

  render() {
    const { item } = this.props;

    // format the object into an array
    const res = Object.entries(item);
    // select the result array
    const resArr = res[0];
    // define the title of the result
    const resTitle = resArr[0];
    // define the properties of the result with ['property name']
    const prop = resArr[1];

    // rounding function
    const roundNum = num => {
      const res = Math.round(num * 100) / 100;
      return res;
    };

    // has news?
    const hasNewsPDF = res => {
      if (typeof res === 'undefined') {
        return 'display: none;';
      }
    };

    return (
      <Fragment>
        <article className="post">
          {/* {console.log(this.props.triggerModal} */}
          <a
            ref={this.resultTitle}
            className="result__title"
            onClick={this.saveModalTitle}
          >
            {resTitle}
          </a>
          <div className="media-content">
            <div className="content">
              <p>
                Grade APG/External:
                <span className="tag">{prop['has quality grade apg']}</span>
              </p>
            </div>
          </div>
        </article>
        <style jsx>{`
          .tag {
            margin-left: 0.2em;
            margin-right: 1em;
          }
        `}</style>
      </Fragment>
    );
  }
}
