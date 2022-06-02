import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(College, Major, Duration, TeachingLanguage, Requirements) {
  return { College, Major, Duration, TeachingLanguage, Requirements };
}

const rows = [
  createData('School of Business', 'International Economics and Trade', 4, 'English', 'Require IELTS score not less than 6 or equivalent qualification.'),
  createData('School of Busines', 'Marketing', 4, 'English', 'Require IELTS score not less than 6 or equivalent qualification.'),
  createData('School of Business', 'Business Administration', 4, 'English', 'Require IELTS score not less than 6 or equivalent qualification.'),
  createData('College of Life & Environmental Science', 'Biotechnology', 4, 'English', 'Require IELTS score not less than 6 or equivalent qualification.'),
  createData('College of Computer Science and Artificial Intelligence', 'Computer Science and Technology', 4, 'English', 'Require IELTS score not less than 6 or equivalent qualification.'),
];

export default function Undergraduate() {
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
  const classes = useStyles();

  return (
    <div className={classeses.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
      <div><h2 className="gfont ">ACADEMICS</h2>
      <Fragment>
        <Link to="/collegesnmajors">Colleges and Majors</Link><br />
        <Link to="/Undergraduate">Undergraduate</Link><br />
        <Link to="/PostGraduate">PostGraduate</Link><br />
        <Link to="/NonDegree">Non Degree</Link><br />
        <Link to="/SummerCamp">Summer Camp</Link><br />
    </Fragment>
    </div>
    </Grid>
    <Grid item xs={9}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>College</TableCell>
            <TableCell align="right">Major</TableCell>
            <TableCell align="right">Duaration</TableCell>
            <TableCell align="right">Teaching Language</TableCell>
            <TableCell align="right">Requirements</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.College}>
              <TableCell component="th" scope="row">
                {row.College}
              </TableCell>
              <TableCell align="right">{row.Major}</TableCell>
              <TableCell align="right">{row.Duration}</TableCell>
              <TableCell align="right">{row.TeachingLanguage}</TableCell>
              <TableCell align="right">{row.Requirements}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
    </div>
  );
}
