import React, { Component, Fragment } from 'react';
import ModalXY from './ModalXY';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
      y: ''
    };
  }

  xRef = React.createRef();

  yRef = React.createRef();

  render() {
    const { news, pdfs, plot, properties } = this.props.modalResults;

    // parse the properties, given as a string, into object
    const jsonProp = props => {
      if (!props) {
        return [];
      }
      const propJson = JSON.parse(props);
      return propJson;
    };

    // declare constant propJson as the parsed data
    const propJson = jsonProp(properties);

    const modalTitle = this.props.modalName;

    const xyRefresh = () => {
      this.props.refreshModal({
        title: modalTitle,
        x: this.xRef.current.value,
        y: this.yRef.current.value
      });
    };

    return (
      <Fragment>
        {console.log('Loading props passed to Modal:', this.props)}
        {console.log('Logging the Modal Results', this.props.modalResults)}
        {console.log('Pasing the props into Json:', propJson)}

        <header className="modal-card-head">
          <p className="modal-card-title">
            {modalTitle} {` `}
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
          </p>

          <button
            className="delete"
            aria-label="close"
            onClick={this.props.closeModal}
          ></button>
        </header>
        <section className="modal-card-body">
          <div className={this.props.spinnerStatus ? '' : 'hide'}>
            <div className="spinner">
              <div className="dot1"></div>
              <div className="dot2"></div>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: plot }}></div>
          <br />
          <div className="columns is-mobile">
            <div className="column">
              <p className="help">Y Filter</p>
              <div className="control">
                <div className="select">
                  <select id="modal-filter-y" ref={this.yRef}>
                    <ModalXY parameters={propJson} />
                  </select>
                </div>
              </div>
            </div>
            <div className="column">
              <p className="help">X Filter</p>
              <div className="control">
                <div className="select">
                  <select id="modal-filter-x" ref={this.xRef}>
                    <ModalXY parameters={propJson} />
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button
            id="xy-button"
            className="button is-success"
            onClick={xyRefresh}
          >
            Update Chart X/Y
          </button>
        </footer>
        <style jsx>{`
          .hide {
            display: none;
          }
        `}</style>
      </Fragment>
    );
  }
}
