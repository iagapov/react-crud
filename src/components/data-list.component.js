import React, { Component } from "react";
import ILogDataService from "../services/ilog.service";
import { withRouter } from '../common/with-router';


import { LineChart, Line } from 'recharts';

import { Link } from "react-router-dom";

var data = [];
data.push(  {name: 'Page A', uv: 4000});
data.push(  {name: 'Page B', uv: 5000});
data.push(  {name: 'Page C', uv: 2000});
data.push(  {name: 'Page D', uv: 8000});
data.push(  {name: 'Page E', uv: 5300});
data.push(  {name: 'Page F', uv: 1200});


class DataList extends Component {

  //const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]
  constructor(props) {
    super(props);
    this.x = "Data caption"
    this.state = {
      datasets: [],
      currentDataset: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveDatasets();
  }

  retrieveDatasets() {
    ILogDataService.getAllData()
      .then(response => {
        this.setState({
          datasets: response.data
        });
            
        console.log(response.data);

      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    const { searchTitle, datasets, currentDataset, currentIndex } = this.state;
    return (
    //   <ul className="list-group">
    //   {records &&
    //     records.map((record, index) => (
    //       <li
    //         className={
    //           "list-group-item " +
    //           (index === currentIndex ? "active" : "")
    //         }
    //         onClick={() => this.setActiveRecord(record, index)}
    //         key={index}
    //       >
    //         {record.title}
    //       </li>
    //     ))}
    // </ul>

    <div class="row plot">
      {datasets && datasets.map((dataset, index) => (
      <div class="col pt-5">
      <Link to={"/records"} className="nav-link">
      <h1 class="h2">Data {dataset.title}</h1>
      { dataset.data != null ?  (
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
       ) : 
       (
         <h1 class="h3">No data</h1>
      )}
      </Link>
      </div>
      ))}
    </div>
    );
  }
}


export default withRouter(DataList);