import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
export default function NonDegree() {
  const useStylesGrid = makeStyles((theme) =>({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const classeses = useStylesGrid();
  return (
    <div className={classeses.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
      <div><h2 className="gfont ">ACADEMICS</h2>
      <Fragment>
      
        <Link to="/collegesnMajors">Colleges and Majors</Link><br />
        <Link to="/Undergraduate">Undergraduate</Link><br />
        <Link to="/PostGraduate">PostGraduate</Link><br />
        <Link to="/NonDegree">Non Degree</Link><br />
        <Link to="/SummerCamp">Summer Camp</Link><br />
    </Fragment>
    </div>
    </Grid>
    <Grid item xs={9}>
      <h1>Non-degrees</h1>
      </Grid>
    </Grid>
    </div>
  )
}
