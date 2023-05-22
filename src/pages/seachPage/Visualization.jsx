import React, {useContext} from "react";
import {useStyles} from "./styles";
import {Box, CircularProgress, Grid, Paper, Tooltip} from "@material-ui/core";
import SentWordCloud from "../chart/SentWordCloud";
import SentLineChart from "../chart/SentLintChart";
import MainContext from "../../context/MainContext";

const Visualization = (props) => {
  const classes = useStyles()
  const {isLoading} = useContext(MainContext);
  const {keyword} = props;

  return (
    <Grid
      container
      justifyContent={'center'}
    >
      {
        isLoading ? <Box display={'flex'} alignItems={'center'}><CircularProgress/></Box> : (
          <>
            <Grid
              xs={4}
              item>
              <Tooltip title={'워드 클라우드가 잘 보이지 않으신다면 새로고침 부탁드립니다.'}>
                <SentWordCloud keyword={keyword}/>
              </Tooltip>
            </Grid>
            <Grid
              xs={7}
              item>
              <SentLineChart keyword={keyword} xValue={'date'}
                             yValues={{
                               '긍정 지수' : 'blue',
                               '부정 지수' : 'red',
                               '감성 지수' : 'black',}}
                             grid/>
            </Grid>
          </>
        )
      }
    </Grid>
  )
}

export default Visualization;