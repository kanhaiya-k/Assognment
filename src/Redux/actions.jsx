/** @format */

import {
  FILTER,
  SEARCH_DATA,
  SET_DATA,
  SORT_A_Z,
  SORT_DATE_ASC,
  SORT_DATE_DESC,
  SORT_QUALITY_ASC,
  SORT_QUALITY_DESC,
  SORT_Z_A,
} from "./actionTypes";

export const search_Data = (payload) => {
  return {
    type: SEARCH_DATA,
    payload,
  };
};

export const setData = (payload) => {
  return {
    type: SET_DATA,
    payload,
  };
};

export const sortA_Z = (payload) => {
  return {
    type: SORT_A_Z,
    payload,
  };
};

export const sortZ_A = (payload) => {
  return {
    type: SORT_Z_A,
    payload,
  };
};
export const sortDATE_ASC = (payload) => {
  return {
    type: SORT_DATE_ASC,
    payload,
  };
};
export const sortDATE_DESC = (payload) => {
  return {
    type: SORT_DATE_DESC,
    payload,
  };
};
export const sortQUALITY_ASC = (payload) => {
  return {
    type: SORT_QUALITY_ASC,
    payload,
  };
};
export const sortQUALITY_DESC = (payload) => {
  return {
    type: SORT_QUALITY_DESC,
    payload,
  };
};
export const filter_Data = (payload) => {
  return {
    type: FILTER,
    payload,
  };
};
