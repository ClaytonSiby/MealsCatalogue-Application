import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import FOODDATAFETCH from '../redux/food/foodActions';
import LoadingComponent from '../Pages/LoadingComponent';

const FoodDetails = ({ food, foodId, foodRequest }) => {
  const [doneLoading, setDoneLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await foodRequest(foodId);
      setDoneLoading(true);
    })();
  }, []);

  return (
    <Container fluid>
      {!doneLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '100vh', flexDirection: 'column' }}
        >
          <h4>...loading</h4>
          <LoadingComponent type="bars" color="#03cf4e" />
        </div>
      ) : (
        <Row
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: '100vh', flexDirection: 'column' }}
        >
          {food
            && food.meals
            && food.meals.map((strItem) => (
              <Col
                key={strItem.idMeal}
                xs={12}
                sm={12}
                md={12}
                className="py-3"
                style={{
                  background: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${strItem.strMealThumb})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  color: '#fff',
                }}
              >
                <Container>
                  <Row>
                    <Col xs={12} md={6}>
                      <div className="strDetails">
                        <h4>
                          <i>{strItem.strMeal}</i>
                        </h4>
                        <p className="ItemCategory">
                          Category:
                          {' '}
                          <i className="text-info">{strItem.strCategory}</i>
                        </p>
                        <p className="ItemCountry">
                          Origins:
                          {' '}
                          <i className="text-secondary">{strItem.strArea}</i>
                        </p>
                        <p className="SourLink">
                          Source:
                          {' '}
                          <i>
                            <a href={`${strItem.strSource}`} className="text-info" target="_blank" rel="noreferrer">visit website</a>
                          </i>
                        </p>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div className="srtMeasurements">
                        <p>
                          <i>{strItem.strInstructions}</i>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  food: state.foodItem.food,
  foodId: state.itemDetails.foodId,
});

const mapDispatchToProps = (dispatch) => ({
  foodRequest: (url) => dispatch(FOODDATAFETCH.foodRequest(url)),
});

FoodDetails.propTypes = {
  food: PropTypes.instanceOf(Object).isRequired,
  foodRequest: PropTypes.func.isRequired,
  foodId: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetails);
