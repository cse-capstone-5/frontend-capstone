import React from "react";
import {useStyles} from "./styles";
import {Grid, Paper} from "@material-ui/core";

const Outline = (props) => {
  const classes = useStyles()
  const {style} = props

  return (
    <Grid
      xs={10}
      item
    >
      <Paper
        className={classes.paper}
        variant={'outlined'}
        style={style}
      >
        {props.children}
      </Paper>
    </Grid>
  )
}

export default Outline;