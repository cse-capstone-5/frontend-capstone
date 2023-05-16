import React, {useContext, useEffect, useState} from "react";
import {getNewsByKeyword} from "../../api/apis";
import {Box, CircularProgress, Grid, Typography} from "@material-ui/core";
import Item from "./Item";
import MainContext from "../../context/MainContext";

const ArticleComponent = (props) => {
  const {
    isLoading,
    articleData
  } = useContext(MainContext);
  const {keyword} = props;

  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={'center'}
    >
      {
        isLoading ? <CircularProgress/> : (
          <Grid
            item
            xs={12}
          >
            <Typography
              variant={'h5'}
              paragraph
              style={{
                marginTop: 10
              }}
            >
              "{keyword}" 에 대한 기사 추천입니다.
            </Typography>
            {articleData.map(value => <Item key={value.idx} source={value}/>)}
          </Grid>
        )
      }
    </Grid>
  )
};

export default ArticleComponent;