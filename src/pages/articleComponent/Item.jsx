import React from "react";
import {Box, Button, Card, Grid} from "@material-ui/core";
import {Link} from "react-router-dom";

const Item = (props) => {
  const {source} = props

  return (
    <Grid item xs={12}>
      <Card variant={'outlined'}>
        <Box>
          <Box pr={2}>
            <Grid
              container
              direction={'row'}
              justifyContent={'flex-end'}
              alignItems={'flex-start'}
              spacing={1}
            >
              <Grid item>
                <Button
                  size={'small'}
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
          <h2>
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