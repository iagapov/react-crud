import React, { Component } from "react";
import TutorialDataService from "../services/ilog.service";
import { withRouter } from '../common/with-router';


import { LineChart, Line } from 'recharts';


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

class Data extends Component {

  //const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]
  constructor(props) {
    super(props);
    this.x = "some string"
  }

  render() {
    return (
    <div className="plot">
    <h1 class="h2">Data {this.x}</h1>
    <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
    </div>
    );
  }
}


export default withRouter(Data);