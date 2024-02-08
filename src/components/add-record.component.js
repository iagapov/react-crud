import React, { Component } from "react";
import ILogDataService from "../services/ilog.service";

export default class AddRecord extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveRecord = this.saveRecord.bind(this);
    this.newRecord = this.newRecord.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "", 
      published: false,

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveRecord() {
    var data = {
      title: this.state.title,
      description: this.state.description
    };

    ILogDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newRecord() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false
    });
  }

  

  render() {
    return (
      <div>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newRecord}>
              Add
            </button>
          </div>
        ) : (
          <div className="mb-3">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" value={this.state.description} onChange={this.onChangeDescription} rows="20" cols="150"></textarea>
            </div>

            <button onClick={this.saveRecord} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
  
}