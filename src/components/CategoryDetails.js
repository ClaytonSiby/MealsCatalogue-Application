import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container, Row, Col, Card, Button,
} from 'react-bootstrap';
import FOODLISTDATAFETCH from '../redux/foodlist/foodlistActions';
import LoadingComponent from '../Pages/LoadingComponent';
import { changeFoodId } from '../redux/itemDetailsReducer';
import truncate from '../helpers/truncate';
import styles from '../assets/category.module.css';

const CategoryDetails = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.itemDetails.categoryName);
  const food = useSelector((state) => state.foodlist.foodList);
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        await dispatch(FOODLISTDATAFETCH.fetchFoodList(category));
        setCompleted(true);
      })();
    }, 2000);
  }, []);

  return (
    <Container className="p-0 m-0">
      {!completed ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '100vh', flexDirection: 'column' }}
        >
          <h4>...loading</h4>
          <LoadingComponent type="bars" color="#03cf4e" />
        </div>
      ) : (
        <Row>
          {food
            && food.meals
            && food.meals.map((food) => (
              <Col xs={12} sm={6} md={3} key={food.idMeal} className="my-2">
                <Card className="m-0 p-0">
                  <Card.Img
                    variant="top"
                    alt="foodItem image"
                    src={`${food.strMealThumb}`}
                  />
                  <Card.Body className="m-0 p-1">
                    <p>{truncate(food.strMeal, 25)}</p>
                    <Button
                      type="button"
                      className="btn btn-block btn-info"
                      onClick={() => dispatch(changeFoodId(food.idMeal))}
                    >
                      <a
                        href={`\\food\\${food.idMeal}`}
                        className={`text-light ${styles.foodItemLink}`}
                      >
                        Prepare Meal
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default CategoryDetails;
