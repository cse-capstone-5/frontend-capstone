import React, {useContext, useEffect, useState} from "react";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import {getLineChartByKeyword} from "../../../api/apis";
import {Box, CircularProgress} from "@material-ui/core";
import ReactWordcloud from "react-wordcloud";
import MainContext from "../../../context/MainContext";

const SentLineChart = (props) => {
  const {
    isLoading,
    lineChartData
  } = useContext(MainContext);
  const {
    keyword,
    grid,
    xValue,
    yValue,
    width = 950,
    height = 450.
  } = props

  console.log(lineChartData)

  return (
    <Box>
      <h2 align={'center'}>{keyword} Line Chart</h2>
      {
        isLoading ? <Box display={'flex'} alignItems={'center'}><CircularProgress/></Box> : (
          <LineChart width={width} height={height} data={lineChartData}>
            <XAxis dataKey={xValue} stroke={"#8884d8"}/>
            <YAxis/>
            {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>}
            <Line type="monotone" dataKey={yValue} stroke={"#8884d8"}/>
            <Tooltip/>
          </LineChart>
        )
      }
    </Box>

  )
}

export default SentLineChart;