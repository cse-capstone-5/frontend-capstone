import React, {useEffect, useState} from "react";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import {getLineChartByKeyword} from "../../../api/apis";
import {CircularProgress} from "@material-ui/core";
import ReactWordcloud from "react-wordcloud";

const SentLineChart = (props) => {
  const {
    keyword,
    grid,
    xValue,
    yValue,
    width=900,
    height=300.
  } = props

  const [data,setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const initLineCharData = () => {
    const mock = [{"name": "2023-04-01 00:00:00", "count": -1.8399632945656776}, {
      "name": "2023-04-02 00:00:00",
      "count": -2.152423206716776
    }, {"name": "2023-04-03 00:00:00", "count": -2.655403323471546}, {
      "name": "2023-04-04 00:00:00",
      "count": -1.3200734984129667
    }, {"name": "2023-04-05 00:00:00", "count": -2.5986902099102736}, {
      "name": "2023-04-06 00:00:00",
      "count": -3.1452706058043987
    }, {"name": "2023-04-07 00:00:00", "count": -1.7605943456292152}
    ];

    const newData = mock.map(value => {
      const name = value.name.slice(0, 10);
      const count = Math.round(value.count * 100) / 100;

      return {
        "name": name,
        "count": count
      }
    })

    setData(newData);
    setIsLoading(false);
    // getLineChartByKeyword(keyword).then(value => {
    //   const LineChartData = value.result;
    //
    //   console.log(value);
    // })
  };

  useEffect(() => {
    initLineCharData();
  }, [keyword])

  return (
    isLoading ? <CircularProgress/> : (
      <LineChart width={width} height={height} data={data}>
        <XAxis dataKey={xValue} stroke={"#8884d8"}/>
        <YAxis/>
        {grid && <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>}
        <Line type="monotone" dataKey={yValue} stroke={"#8884d8"}/>
        <Tooltip/>
      </LineChart>
    )
  )
}

export default SentLineChart;