import React, {useContext, useEffect, useState} from "react";
import {Box, CircularProgress, Grid} from "@material-ui/core";
import ReactWordcloud from "react-wordcloud";
import {getWordCloudByKeyword} from "../../../api/apis";
import MainContext from "../../../context/MainContext";

const SentWordCloud = (props) => {
  const {
    isLoading,
    wordCloudData,
  } = useContext(MainContext);
  const {keyword, source} = props;

  const callbacks = {
    getWordColor: word => word.value > 50 ? "blue" : "red",
    getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
  }

  const options = {
    fontSizes: [10, 80],
    padding: 2,
    enableTooltip: false
  }

  return (
    <Grid
      container
      justifyContent={'center'}
    >
      <Grid
        item>
        <h3 align={'center'}>"{keyword}"의 키워드 요약</h3>
        <ReactWordcloud words={wordCloudData} size={[400, 400]} options={options}/>
      </Grid>
    </Grid>
  )
}

export default SentWordCloud;