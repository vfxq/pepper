import {
  GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_ERROR
} from '../types';

export const getData = {
  type: GET_DATA_START
};

export const getDataSuccess = payload => ({
  type: GET_DATA_SUCCESS,
  payload
});

export const getDataError = error => ({
  type: GET_DATA_ERROR,
  error
})