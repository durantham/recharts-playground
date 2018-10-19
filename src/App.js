import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,LineChart, Line, AreaChart, Area} from 'recharts';
import {Col, Row} from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data2 = [
  {x: 12},
    {x: 24},
      {x: 12},
        {x: 16},
          {x: 18},
            {x: 20},
              {x: 24},
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> VizWithThisShiz </h1>

        <Row type="flex" justify="center">
        <Col span={8}>
        <div>
        <AreaChart className="AppLine AppLine2" width={750} height={250} data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>


            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </div>
        </Col>
        </Row>

        <Row>
        <Col span={8}>
        <div>
        <LineChart className="AppLine AppLine2 AppLine3" width={600} height={250} data={data2}>
        <YAxis hide={true} type="number" domain={[10,26]}/>
        <defs>
          <linearGradient id="colorUp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7117ea" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ea6060" stopOpacity={1}/>
          </linearGradient>
        </defs>
        <Line dot={false} strokeWidth={5} type="monotone" dataKey="x" stroke="url(#colorUp)" />
        </LineChart>
        </div>
        </Col>


        <Col span={8}>
        <div>
        <LineChart className="AppLine AppLine2 AppLine3" width={600} height={250} data={data2}>
        <YAxis hide={true} type="number" domain={[10,26]}/>
        <defs>
          <linearGradient id="colorUp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7117ea" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ea6060" stopOpacity={1}/>
          </linearGradient>
        </defs>
        <Line dot={false} strokeWidth={5} type="monotone" dataKey="x" stroke="url(#colorUp)" />
        </LineChart>
        </div>
        </Col>


        <Col span={7}>
        <div>
        <LineChart className="AppLine AppLine2 AppLine3" width={600} height={250} data={data2}>
        <YAxis hide={true} type="number" domain={[10,26]}/>
        <defs>
          <linearGradient id="colorUp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7117ea" stopOpacity={1}/>
            <stop offset="100%" stopColor="#ea6060" stopOpacity={1}/>
          </linearGradient>
        </defs>
        <Line dot={false} strokeWidth={5} type="monotone" dataKey="x" stroke="url(#colorUp)" />
        </LineChart>
        </div>
        </Col>
        </Row>

      </div>
    );
  }
}

export default App;
