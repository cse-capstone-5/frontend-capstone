import React, {useContext, useEffect, useState} from "react";
import {getNewsByKeyword} from "../../api/apis";
import {Box, CircularProgress} from "@material-ui/core";
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
    isLoading ? <CircularProgress/> : (
      data.map(value =>
        <Box key={value.idx}>
          <Item source={value}/>
        </Box>
      )
    )
  )
};

export default ArticleComponent;