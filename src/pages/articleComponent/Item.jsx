import React from "react";
import {Box, Button, Card, Grid, Paper} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useStyles} from "../seachPage/styles";

const Item = (props) => {
  const {source} = props
  const classes = useStyles();

  return (
    <Grid item xs={12}>
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
                 variant={'outlined'}
                 disableElevation
                 href={source.link}
                 target={'_blank'}
               >
                 기사 보러가기
               </Button>
             </Grid>
            </Grid>
          </Box>
          <h2 align={'center'}>
            <Box component={'span'} mr={4}>
              {source.title}
            </Box>
          </h2>
        </Box>
      </Card>
    </Grid>
  )
};

export default Item;