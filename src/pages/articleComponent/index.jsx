import React, {useContext, useEffect, useState} from "react";
import {getNewsByKeyword} from "../../api/apis";
import {Box, CircularProgress, Grid} from "@material-ui/core";
import Item from "./Item";
import MainContext from "../../context/MainContext";

const ArticleComponent = (props) => {
  const {articleData} = useContext(MainContext);
  const {keyword} = props

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const initArticles = () => {
    let idx = 1;

    getNewsByKeyword(keyword).then(value => {
      const data = value.data.result;
      const articleData = data.map(val => {
        const title = val[0];
        const link = val[1];


        return {
          idx: idx++,
          title: title,
          link: link
        }
      })

      setData(articleData);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    initArticles();
  }, [keyword])

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
            <h2 align={'center'}>"{keyword}"에 대한 기사추천입니다.</h2>
            {data.map(value => <Item key={value.idx} source={value}/>)}
          </Grid>
        )
      }
    </Grid>
  )
};

export default ArticleComponent;