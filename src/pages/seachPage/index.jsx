import React from "react";
import {useParams} from "react-router-dom";
import Chart from "../chart";

const SearchPage = () => {
  const {keyword} = useParams();

  const mock = [
    {name: '2023-04-03', 'count': 2},
    {name: '2023-04-04', 'count': 1},
    {name: '2023-04-05', 'count': 5},
    {name: '2023-04-06', 'count': 7},
    {name: '2023-04-07', 'count': 3},
    {name: '2023-04-08', 'count': 9},
    {name: '2023-04-09', 'count': 10},
    {name: '2023-04-10', 'count': 3},
    {name: '2023-04-11', 'count': 4},
  ];

  return (
    <div>
      test page {keyword}
      <Chart data={mock} xValue={'name'} yValue={'count'}/>
    </div>
  );
}

export default SearchPage;