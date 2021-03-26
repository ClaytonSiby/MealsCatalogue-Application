import React, { useState, useEffect } from 'react'
import FOODDATAFETCH from '../redux/food/foodActions'
import { connect } from 'react-redux'
import LoadingComponent from './LoadingComponent';
import PropTypes from 'prop-types';

const FoodDetails = ({ food, foodId, foodRequest }) => {
  console.log(foodId)
  const [doneLoading, setDoneLoading] = useState(false)
  useEffect(() => {
    ;(async () => {
      await foodRequest(foodId)
      setDoneLoading(true)
    })()
  }, [])

  return !doneLoading ? (
    <LoadingComponent type='bars' color='#03cf4e' />
  ) : (
    <div>{JSON.stringify(food)}</div>
  )
}

const mapStateToProps = state => {
  return {
    food: state.food,
    foodId: state.itemDetails.foodId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    foodRequest: url => dispatch(FOODDATAFETCH.foodRequest(url))
  }
}

FoodDetails.propTypes = {
  food: PropTypes.object.isRequired,
  foodRequest: PropTypes.func.isRequired,
  foodId: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails)
