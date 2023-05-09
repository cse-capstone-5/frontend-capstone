import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import SentLineChart from "../chart/SentLintChart";
import SentWordCloud from "../chart/SentWordCloud";
import {Box, Card, CardContent, Grid} from "@material-ui/core";
import ArticleComponent from "../articleComponent";
import {getAllData} from "../../api/apis";
import MainContext from "../../context/MainContext";

const SearchPage = () => {
  const {
    isLoading,
    fetchData,
    handleIsLoading
  } = useContext(MainContext);
  const {keyword} = useParams();


  useEffect(() => {
    fetchData(keyword);
  }, [keyword]);

  return (
    <div>
      <Box>
        <Grid item xs={12}>
          <Card variant={'outlined'}>
            <Box>
              <Box pr={2}>
                <Grid
                  container
                  justifyContent={'center'}
                  alignItems={'center'}
                  spacing={1}
                >
                  <Grid item>
                    <SentWordCloud keyword={keyword}/>
                  </Grid>
                  <Grid item>
                    <SentLineChart keyword={keyword} lixValue={'name'} yValue={'count'}/>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Box>
      {/*<ArticleComponent keyword={keyword}/>*/}
    </div>
  );
}

export default SearchPage;