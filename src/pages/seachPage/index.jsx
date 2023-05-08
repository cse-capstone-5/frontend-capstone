import React from "react";
import {useParams} from "react-router-dom";
import SentLineChart from "../chart/SentLintChart";
import SentWordCloud from "../chart/SentWordCloud";

const SearchPage = () => {
  const {keyword} = useParams();

  return (
    <div>
      test page {keyword}
      <SentLineChart keyword={keyword} xValue={'name'} yValue={'count'}/>
      <SentWordCloud keyword={keyword}/>
    </div>
  );
}

export default SearchPage;