import React, {useContext} from "react";
import {useStyles} from "./styles";
import {Box, CircularProgress, Grid, Paper} from "@material-ui/core";
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
              <SentWordCloud keyword={keyword}/>
            </Grid>
            <Grid
              xs={7}
              item>
              <SentLineChart keyword={keyword} xValue={'date'} yValue={'count'} grid/>
            </Grid>
          </>
        )
      }
    </Grid>
  )
}

export default Visualization;