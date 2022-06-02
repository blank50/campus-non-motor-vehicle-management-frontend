import React, { useState, useEffect, Component } from 'react';
import { setAlert } from '../../actions/alertAction';
import {
  addVehicle,
  updateVehicle,
  clearCurrent
} from '../../actions/vehicleAction';
import { connect } from 'react-redux';
import chroma from 'chroma-js';
//import { ColourOption, colourOptions } from './data';

import './Vehicle.css';
import ColorPicker from "./ColorPicker";
import PhoneInput from 'react-phone-number-input'
import cn from 'react-phone-number-input/locale/en.json'
import Input from 'react-phone-number-input/input';
import ColourPicker from "./ColourPicker";
// import Rating from "./Rating";
import { Paper } from "@material-ui/core"
import styled from 'styled-components';
import Rating from '../vehicle/Rating'
import Select from '@material-ui/core/Select';
import SelectReact from 'react-select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MultipleSelect from '../vehicle/MultipleSelect';
import LearnManual from '../vehicle/LearnManual';
import { Link } from 'react-router-dom'


const VehicleForm = ({
  setAlert,
  addVehicle,
  clearCurrent,
  current,
  updateVehicle
}) => {
  useEffect(() => {
    if (current !== null) {
      setVehicle(current);
    } else {
      setVehicle({
        plateNumber: '',   
        registration: '',
        owner: '',
        studentId: ''
      });
    }
  }, [addVehicle, updateVehicle, current]); // if the vehicleContext or the current value is changed

  // Since this is a form we need component level state
  const [vehicle, setVehicle] = useState({
    plateNumber: '',
    registration: '',
    owner: '',
    studentId: ''
  });

  const {
    plateNumber,
    registration,
    owner,
    studentId
  } = vehicle;

  const colors = [
    "red",
    "black",
    "grey",
    "yellow",
    "blue",
]
;
// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//     maxWidth: 300,
//   },
// }));
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };
// const classes = useStyles();
//   const theme = useTheme();
  
// const penaltyOption = [
//   { value: 'OS', label: 'Over Speed'},
//   { value: 'Twin', label: 'Twin'},
//   { value: 'Triplets', label: 'Triplets'},
//   { value: 'helmet', label: 'No helmet'},
//   { value: 'Parking', label: 'No Parking'},
//   { value: 'turn', label: 'No U turn'},
//   { value: 'headlights', label: 'No headlights'},
//   { value: 'DOPP', label: 'Damage of public property'},
//   'Over Speed',
//   'Twin',
//   'Triplets',
//   'quadruplets',
//   'No helmet',
//   'Wrong Parking',
//   'No U turn',
//   'No headlights',
//   'Damage of public property',
// ];

// const penaltyOptions = [
//   { value: 'OS', label: 'Over Speed'},
//   { value: '2', label: 'Twin'},
//   { value: '3', label: 'Triplets'},
//   { value: '4', label: 'quadruplets'},
//   { value: 'No helm', label: 'No helmet'},
//   { value: 'W park', label: 'Wrong Parking'},
//   { value: 'No U', label: 'No U turn'},
//   { value: 'No light', label: 'No headlights' },
//   { value: 'DOPP', label: 'Damage of public property' },
// ];

  const [selectedColor, setSelectedColor] = useState("");
  const [value, setValue] = React.useState(5);
  const [type, setType] = React.useState('');
  const [department, setDepartment] = useState("");
  const [penaltyName, setPenaltyName] = React.useState([]);

  const onChange = e =>
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      if (plateNumber.length < 6) {
        setAlert(
          'The license plate number has to be at least 6 letters long',
          'danger'
        );
      } else {
        addVehicle({...vehicle, color:selectedColor, rating:value, type, department, penalty:penaltyName }); // if there is no current we are adding a new contact
        clearAll();
      }
    } else {
      //updating
      if (plateNumber.length < 6) {
        setAlert(
          'The license plate number has to be at least 6 letters long',
          'danger'
        );
      } else {
        updateVehicle({...vehicle, color:selectedColor, rating:value, type, department, penalty:penaltyName });
        clearAll();
      }
    }
  };

  const clearAll = () => {
    clearCurrent();
  };

 

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Vehicle' : 'Register Vehicle'}
      </h2>
      <h5>License Plate Number</h5>
      <input
        type='text'
        placeholder='Plate number...'
        name='plateNumber'
        value={plateNumber} // the destructured value from vehicle
        onChange={onChange}
        required
      />
      <Select
          onChange={(e) => setDepartment(e.target.value) }
        >
          <option aria-label="Department" value="Department" />
          <option value={"CS and AI"}>CS and AI</option>
          <option value={"Chemical-Engg"}>Chemical Engg</option>
          <option value={"Civil"}>Civil</option>
          <option value={"Law"}>Law</option>
          <option value={"Business"}>Business</option>
        </Select>
      <h5>Department</h5>
      <input
        type='text'
        placeholder='Department...'
        name='department'
        disabled
        value={department}
        onChange={onChange}
        required
      />
      <Select
          onChange={(e) => setType(e.target.value) }
        >
          <option aria-label="E-bike" value="E-bike" />
          <option value={"E-bike"}>E-bike</option>
          <option value={"Gas-bike"}>Gas-bike</option>
          <option value={"Three-wheeler"}>Three-wheeler</option>
          <option value={"Four-Wheeler"}>Four-Wheeler</option>
        </Select>

      <h5>Type</h5>
      <input
        type='text'
        placeholder='Type'
        name='type'
        value={type}
        disabled
        onChange={onChange}
        required
      />
       
      Selected Color: {selectedColor}
      <ColourPicker colors={colors} onChange={(color) => setSelectedColor(color)} />
      <span><Link to="/LearnColour">How To choose the color?</Link></span>


      <h5 className="space">Date of Registration</h5>
      <input
        type='date'
        placeholder='Registration Date...'
        name='registration'
        value={registration}
        onChange={onChange}
        required
      />
      <h5>Owner's name</h5>
      <input
        type='text'
        placeholder='Owner'
        name='owner'
        value={owner}
        onChange={onChange}
        required
      /><h5>Point of Conduct
      </h5>
{/* value, setValue] */}
      <Rating value={value} setValue={setValue}/>
      <span><Link to="/LearnRating">How Rating Works?</Link></span>

      <h5>Penalty Reason</h5>
      <MultipleSelect penaltyName={penaltyName} setPenaltyName={setPenaltyName} />
      {/* <Select
          onChange={(e) => setPenalty(e.target.value) }
        >
          <option aria-label="Department" value="Department" />
          <option value={"CS and AI"}>CS and AI</option>
          <option value={"Chemical-Engg"}>Chemical Engg</option>
          <option value={"Civil"}>Civil</option>
          <option value={"Law"}>Law</option>
          <option value={"Business"}>Business</option>
        </Select> */}
        

{/* 
        <SelectReact
    
    isMulti
    name="penalty"
    options={penaltyOption}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={(e) => setPenalty(e.target.value) }
    
  /> */}

      <h5 className="space">Student Id</h5>
      <input
        type='text'
        placeholder='StudentId'
        name='studentId'
        value={studentId}
        onChange={onChange}
        required
      />
      {/* <Select
        defaultValue={colourOptions[2]}
        options={colourOptions}
        styles={colourStyles}
      /> */}
      {/* <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select> */}



      <div>
        <input
          type='submit'
          value={current ? 'Update Vehicle' : 'Add Vehicle'}
          className='btn btn-primary btn-block'
          onChange={onChange}
        />
      </div>
      <div>
        {current && (
          <div>
            <button className='btn btn-dark btn-block' onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  current: state.vehicle.current
});

export default connect(
  mapStateToProps,
  { setAlert, addVehicle, clearCurrent, updateVehicle }
)(VehicleForm);

