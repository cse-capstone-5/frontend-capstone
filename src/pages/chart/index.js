import React from "react";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';

const Chart = (props) => {
  const {
    data,
    grid,
    xValue,
    yValue,
    width=600,
    height=300.
  } = props

  return (
    <LineChart width={width} height={height} data={data}>
      <XAxis dataKey={xValue} stroke={"#8884d8"}/>
      {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>}
      <Line type="monotone" dataKey={yValue} stroke={"#8884d8"}/>
      <Tooltip/>
    </LineChart>
  )
}

export default Chart;