import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import SentLineChart from "../chart/SentLintChart";
import SentWordCloud from "../chart/SentWordCloud";
import {Box, Card, CardContent, Grid, Paper} from "@material-ui/core";
import ArticleComponent from "../articleComponent";
import MainContext from "../../context/MainContext";
import {useStyles} from "./styles";
import Outline from "./Outline";
import Visualization from "./Visualization";
import Title from "./Title";

const SearchPage = () => {
  const {
    isLoading,
    fetchData,
    handleIsLoading
  } = useContext(MainContext);
  const {keyword} = useParams();
  const classes = useStyles();

  useEffect(() => {
    fetchData(keyword);
  }, [keyword]);

  return (
    <div>
      <Box>
        <Grid
          spacing={3}
          alignItems={'center'}
          justifyContent={'center'}
          container
        >
          <Outline
            style={{
              marginTop: 20,
              backgroundColor: 'gray'
          }}
          >
            <Title keyword={keyword}/>
          </Outline>
          <Outline>
            <Visualization keyword={keyword}/>
          </Outline>
          <Outline>
            <ArticleComponent keyword={keyword}/>
          </Outline>
        </Grid>
      </Box>
    </div>
  );
}

export default SearchPage;