import React, { Component, Fragment } from 'react';

export default class Modal extends Component {
  render() {
    const { news, pdfs, plot, properties } = this.props.modalResults;

    const modalTitle = this.props.modalName;
    const res = '';
    const resPDF = '';
    const resNews = '';
    return (
      <Fragment>
        {console.log(this.props)}
        <header className="modal-card-head">
          <p className="modal-card-title">
            {modalTitle}
            <a id="modal-button-pdf" href={resPDF} target="_blank">
              <i className="fas fa-file-alt"></i>
            </a>
            <a id="modal-button-news" href={resNews} target="_blank">
              <i className="fas fa-newspaper"></i>
            </a>
          </p>

          <button
            className="delete"
            aria-label="close"
            onClick={this.props.closeModal}
          ></button>
        </header>
        <section className="modal-card-body">
          <div dangerouslySetInnerHTML={{ __html: plot }}></div>

          <span>put a plot here</span>
          <br />
          <div className="columns is-mobile">
            <div className="column">
              <p className="help">X Filter</p>
              <div className="control">
                <div className="select">
                  <select id="modal-filter-x">
                    <option></option>
                  </select>
                </div>
              </div>
            </div>
            <div className="column">
              <p className="help">Y Filter</p>
              <div className="control">
                <div className="select">
                  <select id="modal-filter-y">
                    <option></option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button id="xy-button" className="button is-success">
            Update Chart X/Y
          </button>
        </footer>
      </Fragment>
    );
  }
}
