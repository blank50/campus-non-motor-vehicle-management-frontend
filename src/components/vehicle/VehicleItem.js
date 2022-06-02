import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Rating from '@material-ui/lab/Rating';

import {
  deleteVehicle,
  setCurrent,
  clearCurrent
} from '../../actions/vehicleAction';
import { connect } from 'react-redux';
// import FontAwesomeIcon from '@fortawesome/fontawesome-svg-core'
// import FontAwesome from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

const ColorCircle = styled.div`
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  max-width: 100%;
  border-radius: 1%;
  cursor: pointer;
  ${p => p.color && `background: ${p.color};`};
  ${p =>
    p.selected &&
    `border: 5px solid ${
      p.color
    }; background: white; transition: all .2s ease-in-out; transform: scale(1.1)`};
`;

const VehicleItem = ({ vehicle, deleteVehicle, setCurrent, clearCurrent }) => {
  const {
    _id,
    plateNumber,
    department,
    type,
    registration,
    owner,
    studentId,
    color,
    rating,
    penalty
  } = vehicle;

  const onDelete = () => {
    deleteVehicle(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        <i className='fa fa-car'></i>
        <span></span>{plateNumber}
        
        {/* {' '} */}
        {/* <span style={{ float: 'right' }} className='badge badge-success'>
          {department[0].toUpperCase() + department.substr(1)}
        </span> */}
      </h3>
      <ul className='list'>
        {type && (
          <li>
            <span>Type:</span>
            {type}
          </li>
        )}
        {color && (
          <li>
             <ColorCircle
              color={color}
            />
          </li>
        )}
        {rating && (
          <li>
            <Rating name="read-only" 
             precision={0.5}
              value={rating} readOnly
            />
          </li>
        )}
        {penalty && (
          <li>
            <span>Penalty Reason:</span>
            {penalty.join(", ")}
          </li>
        )}

        {registration && (
          <li>
            <span>Registration date:</span>
            {registration}
          </li>
        )}
        {owner && (
          <li>
            <span>Owner's Name:</span>
            {owner}
          </li>
        )}
        {studentId && (
          <li>
            <span>Student Id:</span>
            {studentId}
          </li>
        )}
        {department && (
          <li>
            <span>Department:</span>
            {department}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(vehicle)}>
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};


VehicleItem.propTypes = {
  vehicle: PropTypes.object.isRequired
};

export default connect(
  null,
  { deleteVehicle, setCurrent, clearCurrent }
)(VehicleItem);
