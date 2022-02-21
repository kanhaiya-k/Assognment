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

const init = {
  results: [],
};

export const dataReducer = (state = init, { type, payload }) => {
  switch (type) {
    case SET_DATA:
      return { ...state, results: payload };
    case SORT_A_Z:
      return {
        ...state,
        results: state.results.sort((a, b) => {
          let aTitle = a.title.toUpperCase();
          let bTitle = b.title.toUpperCase();
          if (aTitle < bTitle) {
            return -1;
          }
          if (aTitle > bTitle) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_Z_A:
      return {
        ...state,
        results: state.results.sort((a, b) => {
          let aTitle = a.title.toUpperCase();
          let bTitle = b.title.toUpperCase();
          if (aTitle > bTitle) {
            return -1;
          }
          if (aTitle < bTitle) {
            return 1;
          }
          return 0;
        }),
      };
    case SORT_QUALITY_ASC:
      return {
        ...state,
        results: state.results.sort((a, b) => {
          return a.quality - b.quality;
        }),
      };
    case SORT_QUALITY_DESC:
      return {
        ...state,
        results: state.results.sort((a, b) => {
          return b.quality - a.quality;
        }),
      };
    case SORT_DATE_ASC:
      return {
        ...state,
        results: state.results.sort((a, b) => {
          return a.creation_date - b.creation_date;
        }),
      };
    case SORT_DATE_DESC:
      return {
        ...state,
        results: state.results.sort((a, b) => {
          return b.creation_date - a.creation_date;
        }),
      };
    case FILTER:
      return {
        ...state,
        results: state.results.filter((e) => e.explicit !== false),
      };
    case SEARCH_DATA:
      return { ...state, results: payload };

    default:
      return { ...state };
  }
};
