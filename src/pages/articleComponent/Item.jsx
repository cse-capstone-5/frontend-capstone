import React from "react";
import {Box, Button, Card, Grid, Paper, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useStyles} from "../seachPage/styles";

const Item = (props) => {
  const {source} = props
  const classes = useStyles();

  const makeTitle = (type) => {
    let title = '사람들의 이목을 끈 기사';

    if (type === 'positive') {
      title = '긍정적인 기사'
    } else if (type === 'negative') {
      title = '부정적인 기사'
    }

    return (
      <Typography
        variant={'h6'}
        align={'left'}
        style={{
          marginBottom: 10,
        }}
      >
        {title}
      </Typography>
    );
  };

  return (
    <Grid item xs={12} style={{marginBottom: 20}}>
      {
        makeTitle(source.type)
      }
      <Card variant={'outlined'}>
        <Box>
          <Box className={classes.floatRightBox} pr={2}>
            <Grid
              container
              direaction={'row'}
              justifyContent={'flex-end'}
              alignItems={'flex-start'}
              spacing={1}
            >
              <Grid item>
                <Button
                  size={'large'}
                  variant={'contained'}
                  disableElevation
                  href={source.link}
                  target={'_blank'}
                >
                  기사 보러가기
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box component={'span'} mr={4}>
            <Typography
              variant={'h6'}
              align={'left'}
              style={{
                marginTop: 20,
                marginLeft: 20
              }}
            >
              {source.title}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  )
};

export default Item;