import React from "react";
import {Card, CardContent, Grid, Paper} from "@material-ui/core";

const Title = (props) => {
  const {keyword} = props;

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
        <Grid item xs={3}><h2 style={{color:'white'}}>에 대한 키워드 분석 결과입니다.</h2></Grid>
      </Grid>
    </Grid>
  )
}

export default Title;