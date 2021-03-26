import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FOODDATAFETCH from '../redux/food/foodActions';
import LoadingComponent from './LoadingComponent';

const FoodDetails = ({ food, foodId, foodRequest }) => {
  const [doneLoading, setDoneLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await foodRequest(foodId);
      setDoneLoading(true);
    })();
  }, []);

  return !doneLoading ? (
    <LoadingComponent type="bars" color="#03cf4e" />
  ) : (
    <div>{JSON.stringify(food)}</div>
  );
};

const mapStateToProps = (state) => ({
  food: state.food,
  foodId: state.itemDetails.foodId,
});

const mapDispatchToProps = (dispatch) => ({
  foodRequest: (url) => dispatch(FOODDATAFETCH.foodRequest(url)),
});

FoodDetails.propTypes = {
  food: PropTypes.objectOf(PropTypes.object()).isRequired,
  foodRequest: PropTypes.func.isRequired,
  foodId: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails);
