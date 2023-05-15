import React, {useContext, useEffect, useState} from "react";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine} from 'recharts';
import {Box, CircularProgress, Grid} from "@material-ui/core";
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
    width = 800,
    height = 400.
  } = props

  const getAbsMax = () => {
    const absCountList = lineChartData.map(value => Math.abs(value['count']))
    return Math.max(...absCountList);
  }

  return (
    <Grid
      container
    >
      <Grid
        item
      >
        <h2 align={'center'}>"{keyword}"의 평가 추세</h2>
        <LineChart width={width} height={height} data={lineChartData}>
          <XAxis dataKey={xValue} stroke={"#8884d8"}/>
          <YAxis domain={[-1 * (getAbsMax() + 0.1), getAbsMax() + 0.1]}/>
          {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>}
          <Line type="monotone" dataKey={yValue} stroke={"#8884d8"}/>
          <ReferenceLine y={0} label={'기준점'} stroke={'red'} strokeDasharray="3 3"/>
          <Tooltip/>
        </LineChart>
      </Grid>
    </Grid>

  )
}

export default SentLineChart;