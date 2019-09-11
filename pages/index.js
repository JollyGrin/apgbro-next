import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import Display from '../components/Display';
import Modal from '../components/Modal';
import { getResults, getModal } from '../lib/db';
import { filter } from 'minimatch';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchValue: '',
      searchFilters: {
        sort: '',
        grade: '',
        country: ''
      },
      modalName: '',
      modalActive: false,
      modalResults: []
    };
  }

  saveSearchResult = e => {
    this.setState({
      searchValue: e
    });
  };

  saveFilterState = ({ sort, grade, country }) => {
    this.setState({
      searchFilters: {
        sort,
        grade,
        country
      }
    });
  };

  triggerSearch = () => {
    const searchInput = this.state.searchValue;
    const filterInput = this.state.searchFilters;

    getResults({
      query: searchInput,
      sort_prop: filterInput.sort,
      country: filterInput.country,
      quality_grade_apg: filterInput.grade
    }).then(obj => {
      const searchResults = [];
      obj.forEach(item => {
        searchResults.push(item);
      });
      this.setState({ searchResults });
    });
  };

  triggerModal = resultTitle => {
    console.log(resultTitle);
    getModal({
      name: resultTitle
    }).then(modalResults => {
      this.setState({ modalName: resultTitle });
      this.setState({ modalResults });
      console.log(this.state.modalResults, 'index modal results');
      this.setState({ modalActive: true });
    });
  };

  showModal = () => {
    if (!this.state.modalActive) {
      return 'modal is-clipped';
    }
    return 'modal is-clipped is-active';
  };

  closeModal = () => {
    if (this.state.modalActive) {
      this.setState({ modalActive: false });
    }
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <SearchBar
          saveSearchResult={this.saveSearchResult}
          triggerSearch={this.triggerSearch}
        />

        <br />
        <br />

        {/* Add the filters & display window */}
        <div className="columns">
          <div className="column is-3">
            <Filters saveFilterState={this.saveFilterState} />
          </div>
          <div className="column is-9">
            <Display
              searchResults={this.state.searchResults}
              triggerModal={this.triggerModal}
            />
          </div>
          <div className={this.showModal()}>
            <div className="modal-background"></div>
            <div id="modal-id" className="modal-card ">
              <Modal
                modalName={this.state.modalName}
                modalResults={this.state.modalResults}
                closeModal={this.closeModal}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
