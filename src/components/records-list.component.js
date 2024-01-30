import React, { Component } from "react";
import ILogDataService from "../services/ilog.service";
import { Link } from "react-router-dom";

export default class RecordsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveRecords = this.retrieveRecords.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveRecord = this.setActiveRecord.bind(this);
    this.removeAllRecords = this.removeAllRecords.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      records: [],
      currentRecord: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveRecords();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveRecords() {
    ILogDataService.getAll()
      .then(response => {
        this.setState({
          records: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveRecords();
    this.setState({
      currentRecord: null,
      currentIndex: -1
    });
  }

  setActiveRecord(record, index) {
    this.setState({
      currentRecord: record,
      currentIndex: index
    });
  }

  removeAllRecords() {
    ILogDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    ILogDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          records: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, records, currentRecord, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Records List</h4>

          <ul className="list-group">
            {records &&
              records.map((record, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveRecord(record, index)}
                  key={index}
                >
                  {record.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllRecords}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentRecord ? (
            <div>
              <h4>Record</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentRecord.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentRecord.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentRecord.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/records/" + currentRecord.id}
                className="btn btn-primary"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Record...</p>
            </div>
          )}
        </div>
      </div>
    );
  }

}