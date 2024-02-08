import React, { Component } from "react";
import ILogDataService from "../services/ilog.service";
import { withRouter } from '../common/with-router';

import logo from '../assets/logo192.png'


class AddEquipment extends Component {

  //const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    //this.getRecord(this.props.router.params.id);
  }

  addEquipment() {
    console.log("adding equipment...")
  }

  render() {
    return (
    <div>

<div class="form row
  mt-4">
    <div class="form-group col-sm">
      <label for="title">Item name</label> <input type="text"
      class="form-control" id="title" />
    </div>

  </div>

  <div class="form col mt-4">
    <div class="form-group">
      <label for="articleBody">Description</label>
      <textarea id="articleBody" rows="20" cols="150"></textarea>
    </div> <div class="form-group mt-4">
      <label for="keywords">Keywords</label> <input type="text"
      class="form-control" id="keywords" /> <small id="keywordsHelp"
      class="form-text text-muted" >Comma separated list of
      keywords.</small >
    </div>
  </div>
 
  <label for="formFileMultiple" class="form-label">Select images</label>
<input class="form-control" type="file" id="formFileMultiple" multiple />


  <div class="form row mt-4">
    <div class="form-group col-sm">
      <button name="submitbtn" class="btn btn-primary" onClick={this.addEquipment}>
	    Upload
      </button>
    </div>
  </div>
  <img src={logo} class="img-fluid " alt="Responsive image"></img>
  <img src="http://localhost:8080/api/equipment" class="img-fluid " alt="Responsive image"></img>
    </div>
    );
  }
}


export default withRouter(AddEquipment);