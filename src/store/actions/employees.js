import {
  GET_EMPLOYEES_START, GET_EMPLOYEES_SUCCESS, GET_EMPLOYEES_ERROR
} from '../types';

export const getEmployees = {
  type: GET_EMPLOYEES_START
};

export const getEmployeesSuccess = payload => ({
  type: GET_EMPLOYEES_SUCCESS,
  payload
});

export const getEmployeesError = error => ({
  type: GET_EMPLOYEES_ERROR,
  error
})