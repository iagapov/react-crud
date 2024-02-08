import React, { Component } from "react";
import ILogDataService from "../services/ilog.service";
import { withRouter } from '../common/with-router';

class Record extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getRecord = this.getRecord.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateRecord = this.updateRecord.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);

    this.state = {
      currentRecord: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getRecord(this.props.router.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentRecord: {
          ...prevState.currentRecord,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentRecord: {
        ...prevState.currentRecord,
        description: description
      }
    }));
  }

  getRecord(id) {
    ILogDataService.get(id)
      .then(response => {
        this.setState({
          currentRecord: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentRecord.id,
      title: this.state.currentRecord.title,
      description: this.state.currentRecord.description,
      published: status
    };

    ILogDataService.update(this.state.currentRecord.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentRecord: {
            ...prevState.currentRecord,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateRecord() {
    ILogDataService.update(
      this.state.currentRecord.id,
      this.state.currentRecord
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The record was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteRecord() {    
    ILogDataService.delete(this.state.currentRecord.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/records');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentRecord } = this.state;

    return (
      <div>
        {currentRecord ? (
          <div className="edit-form">
            <h4>Record</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentRecord.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentRecord.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentRecord.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentRecord.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteRecord}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateRecord}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Record...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Record);