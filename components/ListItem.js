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

    const pdfs = prop['has supporting document'];
    const news = prop['has news'];

    // rounding function
    const roundNum = num => {
      const res = Math.round(num * 100) / 100;
      return res;
    };

    return (
      <Fragment>
        <article className="post">
          <a
            ref={this.resultTitle}
            className="result__title"
            onClick={this.saveModalTitle}
          >
            {resTitle}
          </a>{' '}
          {` `}
          <a
            id="modal-button-pdf"
            className={pdfs ? '' : 'hide'}
            href={pdfs}
            target="_blank"
          >
            <i className="fas fa-file-pdf"></i>
          </a>{' '}
          {` `}
          <a
            id="modal-button-news"
            className={news ? '' : 'hide'}
            href={news}
            target="_blank"
          >
            <i className="far fa-newspaper"></i>
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

          .hide {
            display: none;
          }
        `}</style>
      </Fragment>
    );
  }
}
