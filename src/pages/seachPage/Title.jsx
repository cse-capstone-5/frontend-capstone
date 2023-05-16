import React, {useContext} from "react";
import {Card, CardContent, Grid, Paper} from "@material-ui/core";
import DayPicker from "../component/DayPicker";
import MainContext from "../../context/MainContext";

const Title = (props) => {
  const {
    startDate,
    endDate,
    handleStartDate,
    handleEndDate
  } = useContext(MainContext);
  const {keyword} = props;

  const handleChange = (value) => {
    if (value) {
      handleStartDate(value[0]);
      handleEndDate(value[1]);
    } else {
      handleStartDate(new Date());
      handleEndDate(new Date());
    }
  }

  return (
    <Grid
      item
      xs={12}
    >
      <Grid
        container
      >
        <Grid item xs={2}>
          <Card
            item
            variant={'outlined'}
            style={{
              backgroundColor: 'skyblue'
            }}
          >
            <h2>{keyword}</h2>
          </Card>
        </Grid>
        <Grid item xs={2} sm={5}><h2 style={{color: 'white'}}>에 대한 키워드 분석 결과입니다.</h2></Grid>
      </Grid>
      <Grid container style={{marginTop: 20}}>
        <Grid item>
          <DayPicker onChange={handleChange}/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Title;