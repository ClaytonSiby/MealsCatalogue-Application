import axios from 'axios';
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from './categoryTypes';
import ENDPOINTS from '../baseAPIendPoints';

const CATEGORIESDATAFETCH = (() => {
  const fetchCategoriesRequest = () => ({
    type: FETCH_CATEGORIES_REQUEST,
  });

  const fetchCategoriesSuccess = (categories) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories,
  });

  const fetchCategoriesFailure = (message) => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: message,
  });

  const fetchCategories = () => (dispatch) => {
    dispatch(fetchCategoriesRequest());
    axios
      .get(ENDPOINTS.categoriesUrl(), { mode: 'cors' })
      .then((response) => {
        dispatch(fetchCategoriesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCategoriesFailure(error.message));
      });
  };

  return {
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
    fetchCategories,
  };
})();

export default CATEGORIESDATAFETCH;
