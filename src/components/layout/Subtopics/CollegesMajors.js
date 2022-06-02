import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import './Subtopics.css'

const columns = [
  { id: 'Colleges', label: 'Colleges', minWidth: 170 },
  { id: 'Major', label: 'Major', minWidth: 100 },
];
  
function createData(Colleges, Major,) {
  return { Colleges, Major };
}

const rows = [
  createData('College of International Education', 'Chinese Language & Literate (3+1)'),
  createData('College of International Education', 'Business Chinese'),
  createData('College of Computer Science And Artificial Intelligence', 'Computer Science and Technology'),
  createData('College of Computer Science And Artificial Intelligence', 'Network Engineering'),
  createData('College of Computer Science And Artificial Intelligence', 'Data Science and Big Data Technology'),
  createData('College of Computer Science And Artificial Intelligence', 'Artificial Intelligence'),
  
  createData('College of Business', 'Economics'),
  createData('College of Business', 'International Economy and Trade'),
  createData('College of Business', 'Business Administration'),
  createData('College of Business', 'Marketing'),
  createData('College of Business', 'Financial Management'),
  createData('College of Law and Poliics', 'Political and Moral Education'),
  createData('College of Law and Poliics', 'Legal Science'),
  createData('College of Law and Poliics', 'Administration'),
  
  
];
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

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function CollegesMajors() {
  const classes = useStyles();
  const classeses = useStylesGrid();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classeses.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
      <div align=""><h2 className="gfont ">ACADEMICS</h2>
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
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Grid>
    </Grid>
    </div>
  );
}
