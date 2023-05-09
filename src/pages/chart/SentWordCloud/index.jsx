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
    padding: 2
  }

  return (
      <Box>
        <h2 align={'center'}>{keyword} Word Cloud</h2>
        {isLoading ? <CircularProgress/> : (
          <ReactWordcloud words={wordCloudData} size={[450, 450]} options={options}/>
        )}
      </Box>
  )
}

export default SentWordCloud;