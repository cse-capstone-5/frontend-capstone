import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  floatRightBox: {
    float: 'right'
  }
}));