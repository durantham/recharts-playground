import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,LineChart, Line, AreaChart, Area} from 'recharts';
import {Col, Row} from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { Input,Select } from 'antd';

const Search = Input.Search;
const Option = Select.Option;

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
      <div className="App ">
            <h1> VizWithThisShiz </h1>
        <Row type="flex" justify="center">
        <Col className=" heading TimeElapsed" span={8} offset={2}>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 550 }}
            size="large"
          />
          <br /><br />
        </Col>
        </Row>

        <Row type="flex" justify="center">

        <div className="Appline heading TimeElapsed ">

          <Input placeholder="Relevant Time" style={{ width : 150 }} size="large"/>

            <Select defaultValue="Day" style={{ width: 150 }} size="large">
              <Option value="Day">Day</Option>
              <Option value="Week">Week</Option>
              <Option value="Month">Month</Option>
              <Option value="Year" disabled>Year</Option>
            </Select>
        </div>
        </Row>

        <Row type="flex" justify="center">
        <Col span={8}>
        <div>
        <AreaChart className="AppLine Shadow AppLine3" width={700} height={300} data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0FF0B3" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="#036ED9" stopOpacity={0.8}/>
              </linearGradient>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fad961" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="#f76b1c" stopOpacity={0.8}/>
              </linearGradient>
              <linearGradient id="colorUp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7117ea" stopOpacity={1}/>
                <stop offset="100%" stopColor="#ea6060" stopOpacity={1}/>
              </linearGradient>
              <linearGradient id="colorUp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7117ea" stopOpacity={1}/>
                <stop offset="100%" stopColor="#ea6060" stopOpacity={1}/>
              </linearGradient>
              <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#F36265" stopOpacity={0.7}/>
                <stop offset="90%" stopColor="#961276" stopOpacity={0.9}/>
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
        <LineChart className="AppLine Shadow AppLine3" width={600} height={250} data={data2}>
        <YAxis hide={true} type="number" domain={[10,26]}/>
        <Line dot={false} strokeWidth={5} type="monotone" dataKey="x" stroke="url(#colorUp)" />
        </LineChart>
        </div>
        </Col>


        <Col span={8}>
        <div>
        <LineChart className="AppLine Shadow AppLine3" width={600} height={250} data={data2}>
        <YAxis hide={true} type="number" domain={[10,26]}/>
        <Line dot={false} strokeWidth={5} type="monotone" dataKey="x" stroke="url(#colorUp)" />
        </LineChart>
        </div>
        </Col>


        <Col span={7}>
        <div>
        <LineChart className="AppLine Shadow AppLine3" width={600} height={250} data={data2}>
        <YAxis hide={true} type="number" domain={[10,26]}/>
        <Line dot={false} strokeWidth={5} type="monotone" dataKey="x" stroke="url(#colorUp)" />
        </LineChart>
        </div>
        </Col>
        </Row>

        <Row type="flex" justify="center">
        <Col span={8}>
        <div className ="AppLine Shadow AppLine3 ">
        <BarChart width={630} height={250} data={data}
        barCategoryGap = {1}
        barSize={150}
        barGap={10}
        margin={{ top: 5, right: 5, bottom: 0, left: 5 }}
        >


          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar  dataKey="pv" fill="url(#color1)" radius={[8, 8, 0, 0]} width={5}/>
      </BarChart>
      </div>
      </Col>
      </Row>


      </div>
    );
  }
}

export default App;
