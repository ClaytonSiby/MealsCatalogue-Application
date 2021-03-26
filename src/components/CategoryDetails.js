import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FOODLISTDATAFETCH from '../redux/foodlist/foodlistActions';
import LoadingComponent from './LoadingComponent';

const CategoryDetails = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.itemDetails.categoryName);
  const foodList = useSelector((state) => state.foodlist);
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        await dispatch(FOODLISTDATAFETCH.fetchFoodList(category));
        setCompleted(true);
      })();
    }, 2000);
  }, []);

  return !completed ? (
    <div>
      <h4>...loading</h4>
      <LoadingComponent type="bars" color="#03cf4e" />
    </div>

  ) : (
    <div>
      <p>Displaying all Data</p>
      {JSON.stringify(foodList)}
    </div>
  );
};

export default CategoryDetails;
